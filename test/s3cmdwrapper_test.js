/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */
 
'use strict';

var path = require('path');
var s3cmd = require('../lib/s3cmdwrapper');
var env = require('../lib/environment');
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

var fn = function(test) {
  return function(err, data) {
    test.ifError(err);
    console.log(err, data);
    test.done();
  };
};

var tests = {

  setUp: function(done) {
    env.initConfig(require('../conf'), true);
    done();
  },

  get: function(test) {
    test.expect(1);
    var dest = path.join(__dirname, '../build/readme.txt');
    s3cmd.get('/readme.txt', dest, fn(test)); 
  },

  put: function(test) {
    test.expect(1);
    var src = path.join(__dirname, 'data/object');
    s3cmd.put('/path/to/object', src, fn(test));
  },
  
  delete: function(test) {
    test.expect(1);
    s3cmd.delete('/path/to/object', fn(test));
  }
};

exports = module.exports = tests;