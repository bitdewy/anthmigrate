/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

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
    // setup here
    done();
  },

  initConfig: function(test) {
    test.expect(4);

    var config = {
      Bucket: 'Bucket',
      mongo: 'mongo',
      initConfig: 'initConfig'
    };

    var s = settings.initConfig(config, true);
    test.equal(s.Bucket, config.Bucket, '');
    test.equal(s.mongo, config.mongo, '');

    config = {
      Bucket: 'whatever',
      mongo: 'whatever'
    };

    test.notEqual(s.Bucket, config.Bucket, '');
    test.notEqual(s.mongo, config.mongo, '');
    test.done();
  }
};

exports = module.exports = tests;
