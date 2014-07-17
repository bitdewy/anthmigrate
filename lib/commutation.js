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

var fileInfo = function(prefix, relpath) {
  var key = path.join(prefix, relpath);
  return {
    key: key,
    file: path.join(settings.relpath.root, key)
  };
};

var fromObject = function(type, object) {

  var keys = Object.keys(object);

  var proc = function(key) {
    return fileInfo(type, object[key]);
  };

  return keys.map(proc);
};

var commutation = {

  preview: function(record) {

    var proc = function(relpath) {
      return fileInfo(settings.relpath.preview, relpath);
    };

    var previews = record.preview;
    return previews.map(proc);
  },

  packages: function(record) {

    var proc = function(pack) {
      return fileInfo(settings.relpath.theme, pack.file);
    };

    var packs = record.packageFile;
    return packs.map(proc);
  },

  thumbnails: function(record) {
    var keys = ['thumbnail', 'logo'];
    var fileList = [];

    var proc = function(key) {
      if(record[key]) {
        var f = fileInfo(settings.relpath.thumbnails, record[key]);
        fileList.push(f);
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
