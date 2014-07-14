/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var datasource = require('../lib/datasource');
var settings = require('../lib/settings');

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
    settings.initConfig(require('../conf'), true);
    done();
  },

  connect: function(test) {
    test.expect(1);
    var fn = function(err) {
      test.ifError(err);
      test.done();
    };

    datasource.connect(fn);
  },

  next: function(test) {
    test.expect(2);

    var fn = function(err, docs) {
      test.ifError(err);
      console.log(err, docs);
      test.done();
    };

    var connected = function(err) {
      test.ifError(err);
      datasource.next(10, fn);
    };

    datasource.connect(connected);
  }
};

exports = module.exports = tests;
