/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var records = [{
  preview: [
    '/1/path/to/drawer.jpg',
    '/1/path/to/desktop.jpg',
    '/1/path/to/widget.jpg'
  ],
  packageFile: [{
    file: '/1/path/to/theme.apk'
  },{
    file: '/1/path/to/160.amr'
  },{
    file: '/1/path/to/240.amr'
  },{
    file: '/1/path/to/320.amr'
  },{
    file: '/1/path/to/480.amr'
  }],
  thumbnail: '/1/path/to/thumbnail.jpg',
  logo: '/1/path/to/logo.jpg'
  }, {
  channelApks : {
    10010: "/2/path/to/10010/theme.apk",
    10000: "/2/path/to/10000/theme.apk",
    10018: "/2/path/to/10018/theme.apk"
  },
  roundedCornerThumbnails: {
    "mobile" : "/2/path/to/thumbnail_r_mobile.jpg"
  },
  preview: [
    '/2/path/to/drawer.jpg',
    '/2/path/to/desktop.jpg',
    '/2/path/to/widget.jpg'
  ],
  compressedPreviews: [],
  packageFile: [{
    file: '/2/path/to/theme.apk'
  },{
    file: '/2/path/to/160.amr'
  },{
    file: '/2/path/to/240.amr'
  },{
    file: '/2/path/to/320.amr'
  },{
    file: '/2/path/to/480.amr'
  }]
  }, {
  preview: [
    '/3/path/to/drawer.jpg',
    '/3/path/to/desktop.jpg',
    '/3/path/to/widget.jpg'
  ],
  packageFile: [{
    file: '/3/path/to/theme.apk'
  },{
    file: '/3/path/to/160.amr'
  },{
    file: '/3/path/to/240.amr'
  },{
    file: '/3/path/to/320.amr'
  },{
    file: '/3/path/to/480.amr'
  }],
  compressedPreviews: [{
    manage: '/3/path/to/desktop_manage.jpg',
    mobo: '/3/path/to/desktop_mobo.jpg',
    mobile: '/3/path/to/desktop_mobile.jpg'
  }, {
    manage: '/3/path/to/drawer_manage.jpg',
    mobo: '/3/path/to/drawer_mobo.jpg',
    mobile: '/3/path/to/drawer_mobile.jpg'
  }, {
    manage: '/3/path/to/widgets_manage.jpg',
    mobo: '/3/path/to/widgets_mobo.jpg',
    mobile: '/3/path/to/widgets_mobile.jpg'
  }],
  compressedThumbnails: {
    manage: '/3/path/to/thumbnail_manage.jpg',
    mobile: '/3/path/to/thumbnail_mobile.jpg'
  }
}];

exports = module.exports = records;
