/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var datasource = require('./datasource');
var env = require('./environment');
var transfer = require('./transfer');

var CronJob = require('cron').CronJob;

var task = function() {

  var fn = function() {};

  var recvFileList = function(err, fileList) {
    transfer.toAmazonS3(fileList, fn);
  };

  var recvDocs = function(err, docs) {
    transfer.generateFileList(docs, recvFileList);
  };

  datasource.next(10, recvDocs);
};

var migrate = {

  initConfig: function(config, update) {
    return env.initConfig(config, update);
  },

  start: function() {

    var job = new CronJob(env.interval, task);

    var fn = function(err) {
      if (err) {
        return console.log('connect error');
      }
      job.start();
    };

    datasource.connect(fn);
  }
};

exports = module.exports = migrate;
