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
  bucket: 'c-launcher-staticsource-mfs-20140708',
  region: 'ap-southeast-1',
  mongodb: 'mongodb://10.60.145.18:27017/anthcraft',
  property: path.join(__dirname, 'settings.properties'),
  relpath: {
    root: '/home/webadmin/anthCraft-dist/public/resources',
    theme: 'themes',
    preview: 'preview',
    thumbnails: 'thumbnail'
  },
  interval: '*/6 * * * * *',
  count: 1
};

exports = module.exports = configuration;
