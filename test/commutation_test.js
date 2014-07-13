/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var env = require('../lib/environment');
var commutatoin = require('../lib/commutation');
var records = require('./data/records');
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var tests = {

  setUp: function(done) {
    env.initConfig(require('../conf'), true);
    done();
  },

  preview: function(test) {

    var fn = function(record) {
      var previews = commutatoin.preview(record);
      console.log(previews);
    };
    records.forEach(fn);
    test.done();

  },

  packages: function(test) {

    var fn = function(record) {
      var previews = commutatoin.packages(record);
      console.log(previews);
    };
    records.forEach(fn);
    test.done();
  }
};

exports = module.exports = tests;
