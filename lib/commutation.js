/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var settings = require('./settings');

var fromObject = function(type, object) {

  var keys = Object.keys(object);

  var proc = function(key) {
    var fileInfo = {};
    var relpath = object[key];
    fileInfo.key = path.join(type, relpath);
    fileInfo.file = path.join(settings.relpath.root, fileInfo.key);
    return fileInfo;
  };

  return keys.map(proc);
};

var commutation = {

  preview: function(record) {

    var proc = function(relpath) {
      var fileInfo = {};
      fileInfo.key = path.join(settings.relpath.preview, relpath);
      fileInfo.file = path.join(settings.relpath.root, fileInfo.key);
      return fileInfo;
    };

    var previews = record.preview;
    return previews.map(proc);
  },

  packages: function(record) {

    var proc = function(pack) {
      var fileInfo = {};
      fileInfo.key = path.join(settings.relpath.theme, pack.file);
      fileInfo.file = path.join(settings.relpath.root, fileInfo.key);
      return fileInfo;
    };

    var packs = record.packageFile;
    return packs.map(proc);
  },

  thumbnails: function(record) {
    var keys = ['thumbnail', 'logo'];
    var fileList = [];

    var proc = function(key) {
      var fileInfo = {};
      if(record[key]) {
        fileInfo.key = path.join(settings.relpath.thumbnails, record[key]);
        fileInfo.file = path.join(settings.relpath.root, fileInfo.key);
        fileList.push(fileInfo);
      }
    };

    keys.forEach(proc);
    return fileList;
  },

  injectedPackages: function(record) {
    var packs = record.channelApks;
    return packs ? fromObject(settings.relpath.theme, packs) : [];
  },

  roundedCornerThumbnails: function(record) {
    var pictures = record.roundedCornerThumbnails;
    return pictures ? fromObject(settings.relpath.thumbnails, pictures) : [];
  },

  compressedThumbnails: function(record) {
    var pictures = record.compressedThumbnails;
    return pictures ? fromObject(settings.relpath.thumbnails, pictures) : [];
  },

  compressedPreviews: function(record) {
    var previews = record.compressedPreviews;

    var fn = function() {
      var binded = fromObject.bind(this, settings.relpath.preview);
      var arrays = previews.map(binded);
      return Array.prototype.concat.apply([], arrays);
    };

    return previews ? fn() : [];
  }
};

exports = module.exports = commutation;
