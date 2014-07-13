/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var env = require('./environment');

var commutation = {

  preview: function(record) {
    var fileList = [];

    var proc = function(relpath) {
      var fileInfo = {};
      fileInfo.key = path.join(env.relpath.preview, relpath);
      fileInfo.file = path.join(env.relpath.root, fileInfo.key);
      fileList.push(fileInfo);
    };

    var previews = record.preview;
    previews.forEach(proc);

    return fileList;
  },

  packages: function(record) {
    var fileList = [];

    var proc = function(pack) {
      var fileInfo = {};
      fileInfo.key = path.join(env.relpath.theme, pack.file);
      fileInfo.file = path.join(env.relpath.root, fileInfo.key);
      fileList.push(fileInfo);
    };

    var packs = record.packageFile;
    packs.forEach(proc);

    return fileList;
  }
};

exports = module.exports = commutation;
