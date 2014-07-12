/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var extend = require('util')._extend;

var env = {
  initConfig: function(config, update) {
    for (var property in config) {
      if (env[property] && !update) {
        console.log('\nproperty `' + property + '` already exist in environment.');
        continue;
      }
      if (config[property] instanceof Object) {
        env[property] = extend({}, config[property]);
      } else {
        env[property] = config[property];
      }
    }
    return env;
  }
};

exports = module.exports = env;
