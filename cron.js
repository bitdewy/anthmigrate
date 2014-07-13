/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var anthmigrate = require('./lib/anthmigrate');

anthmigrate.initConfig(require('./conf'), true);

anthmigrate.start();
