/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var configuration = {
  Bucket: 'c-launcher-staticsource-mfs-test-20140708',
  mongodb: 'mongodb://10.60.145.18:27017/anthcraft',
  property: path.join(__dirname, 'settings.properties'),
  relpath: {
    root: '/home/webadmin/anthCraft-dist/public/resources',
    theme: 'themes',
    preview: 'preview',
    thumbnails: 'thumbnail'
  },
  interval: '00 * * * * *'
};

exports = module.exports = configuration;
