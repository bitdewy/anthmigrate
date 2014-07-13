/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var async = require('async');
var fs = require('fs');
var s3cmd = require('./s3cmdwrapper');
var commutation = require('./commutation');

var move = function(fileInfo, fn) {

  var remove = function(err, result) {
    if (err) {
      return fn(err);
    }
    fs.unlinkSync(fileInfo.file);
    fn(err, result);
  };

  if (fs.existsSync(fileInfo.file)) {
    s3cmd.put(fileInfo.key, fileInfo.file, remove);
  } else {
    console.log('\nfile `' + fileInfo.file + '` does not exist.');
    fn();
  }
};

var flattenArray = function(done) {

  return function(err, results) {
    var fileList = Array.prototype.concat.apply([], results);
    done(err, fileList);
  };
};

var filter = function(record, done) {

  var functions = function(object) {

    var isFunction = function(property) {
      return object[property] instanceof Function;
    };

    var toFunction = function(property) {
      return function(fn) {
        var result = object[property](record);
        fn(null, result);
      };
    };

    var properties = Object.getOwnPropertyNames(object);
    return properties.filter(isFunction).map(toFunction);
  };

  async.parallel(functions(commutation), flattenArray(done));
};

var transfer = {

  toAmazonS3: function(fileList, done) {

    async.each(fileList, move, done);
  },

  generateFileList: function(docs, done) {

    async.map(docs, filter, flattenArray(done));
  }

};

exports = module.exports = transfer;
