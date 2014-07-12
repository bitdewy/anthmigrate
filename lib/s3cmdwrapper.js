/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var env = require('./environment');

var exec = function(cmd, done) {
  var fn = function(err, stdout, stderr) {
    done(err, {
      'stdout': stdout,
      'stderr': stderr
    });
  };
  console.log(cmd);
  require('child_process').exec(cmd, fn);
};

var s3cmd = {
  get: function(path, file, done) {
    var cmd = ['s3cmd', 'get', 's3://' + env.Bucket + path, file];
    exec(cmd.join(' '), done);
  },
  put: function(path, file, done) {
    var cmd = ['s3cmd', 'put', file, 's3://' + env.Bucket + path];
    exec(cmd.join(' '), done);
  },
  delete: function(path, done) {
    var cmd = ['s3cmd', 'del', 's3://' + env.Bucket + path];
    exec(cmd.join(' '), done);
  }
};

exports = module.exports = s3cmd;
