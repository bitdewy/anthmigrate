/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var settings = require('../lib/settings');
var transfer = require('../lib/transfer');
var docs = require('./data/records');

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

  generateFileList: function(test) {

    var fn = function(err, results) {
      console.log(err, results);
      test.done();
    };

    transfer.generateFileList(docs, fn);
  },

  toAmazonS3: function(test) {

    var fn = function(err, results) {
      console.log(err, results);
      test.done();
    };

    var putObjects = function(err, fileList) {
      test.ifError(err);
      transfer.toAmazonS3(fileList, fn);
    };

    transfer.generateFileList(docs, putObjects);
  }
};

exports = module.exports = tests;
