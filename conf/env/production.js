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
  bucket: 'c-launcher-staticsource-mfs-test-20140708',
  region: 'ap-southeast-1',
  mongodb: 'mongodb://10.52.201.81:27017/anthcraft',
  property: path.join(__dirname, 'settings.properties'),
  relpath: {
    root: '/home/webadmin/anthCraft-dist/public/resources',
    theme: 'themes',
    preview: 'preview',
    thumbnails: 'thumbnail'
  },
  interval: '00 * * * * *',
  count: 10
};

exports = module.exports = configuration;
