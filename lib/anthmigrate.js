/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var env = require('./environment');

var migrate = {
  
  awesome: function() {
    return 'awesome';
  },

  initConfig: function(config, update) {
    return env.initConfig(config, update);
  },

  start: function() {

  }
};

exports = module.exports = migrate;
