/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var AWS = require('aws-sdk');
var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');
var settings = require('./settings');

AWS.config.update({region: settings.region});

var s3 = new AWS.S3();

var s3op = {

  get: function(key, file, done) {
    var params = {
      Bucket: settings.bucket,
      Key: key
    };

    var fn = function(err, data) {
      if (err) {
        return done(err);
      }
      mkdirp.sync(path.dirname(file));
      fs.writeFileSync(file, data.Body);
      done(err, file);
    };

    s3.getObject(params, fn);
  },

  put: function(key, file, done) {
    var params = {
      Bucket: settings.bucket,
      Key: key,
      Body: fs.readFileSync(file)
    };

    s3.putObject(params, done);
  },

  delete: function(key, done) {
    var params = {
      Bucket: settings.bucket,
      Key: key
    };

    s3.deleteObject(params, done);
  }
};

exports = module.exports = s3op;
