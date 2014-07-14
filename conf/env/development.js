/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var configuration = {
  Bucket: 'bitdewy',
  mongodb: 'mongodb://admin:123@10.127.129.88:27017/anthcraft',
  property: path.join(__dirname, 'settings.properties'),
  relpath: {
    root: path.join(__dirname, '../../build'),
    theme: 'themes',
    preview: 'preview',
    thumbnails: 'thumbnail'
  },
  interval: '00 * * * * *',
  count: 10
};

exports = module.exports = configuration;
