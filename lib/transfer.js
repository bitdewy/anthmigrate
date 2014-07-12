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
var path = require('path');
var env = require('./environment');
var s3cmd = require('./s3cmdwrapper');

var move = function(fileInfo, fn) {

  var removeOrigin = function() {
    return function() {
      fs.unlinkSync(fileInfo.file);
      return fn;
    };
  };

  if (fs.existsSync(fileInfo.file)) {
    s3cmd.put(fileInfo.key, fileInfo.file, removeOrigin);
  }
};

var filter = function(record) {
  var fileList = [];
  var previews = record.preview;

  var processPreview = function(relpath) {
    var fileInfo = {};
    fileInfo.key = path.join(env.relpath.preview, relpath);
    fileInfo.file = path.join(env.relpath.root, fileInfo.key);
    fileList.push(fileInfo);
  };

  previews.forEach(processPreview);
  
  var packages = record.packageFile;

  var processPackage = function(pack) {
    var fileInfo = {};
    fileInfo.key = path.join(env.relpath.theme, pack.file);
    fileInfo.file = path.join(env.relpath.root, fileInfo.key);
    fileList.push(fileInfo);
  };

  packages.forEach(processPackage);

  return fileList;
};

var transfer = {

  toAmazonS3: function(fileList, done) {

    var fn = function(err) {
      done(err);
    };

    async.each(fileList, move, fn);
  },

  generateFileList: function(docs, done) {

    var fn = function(err, results) {
      var fileList = [];
      fileList.concat.apply(fileList, results);
      done(err, fileList);
    };

    async.map(docs, filter, fn);
  }

};

exports = module.exports = transfer;
