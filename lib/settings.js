/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var extend = require('util')._extend;

var object = {

  initConfig: function(config, update) {
    for (var property in config) {
      if (object[property] && !update || object[property] instanceof Function) {
        console.log('\nproperty `' + property + '` already exist.');
        continue;
      }
      if (config[property] instanceof Object) {
        object[property] = extend({}, config[property]);
      } else {
        object[property] = config[property];
      }
    }
    return object;
  }
};

exports = module.exports = object;
