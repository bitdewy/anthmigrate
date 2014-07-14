/*
 * anthmigrate
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var settings = require('../lib/settings');
var commutation = require('../lib/commutation');
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
    settings.initConfig(require('../conf'), true);
    done();
  },

  preview: function(test) {

    var fn = function(record) {
      var previews = commutation.preview(record);
      console.log(previews);
    };
    records.forEach(fn);
    test.done();

  },

  packages: function(test) {

    var fn = function(record) {
      var packs = commutation.packages(record);
      console.log(packs);
    };
    records.forEach(fn);
    test.done();

  },

  thumbnails: function(test) {

    var fn = function(record) {
      var pictures = commutation.thumbnails(record);
      console.log(pictures);
    };
    records.forEach(fn);
    test.done();

  },

  injectedPackages: function(test) {

    var fn = function(record) {
      var packs = commutation.injectedPackages(record);
      console.log(packs);
    };
    records.forEach(fn);
    test.done();
  },

  roundedCornerThumbnails: function(test) {

    var fn = function(record) {
      var pictures = commutation.roundedCornerThumbnails(record);
      console.log(pictures);
    };
    records.forEach(fn);
    test.done();
  },

  compressedThumbnails: function(test) {
    var fn = function(record) {
      var pictures = commutation.compressedThumbnails(record);
      console.log(pictures);
    };
    records.forEach(fn);
    test.done();
  },

  compressedPreviews: function(test) {
    var fn = function(record) {
      var pictures = commutation.compressedPreviews(record);
      console.log(pictures);
    };
    records.forEach(fn);
    test.done();
  }
};

exports = module.exports = tests;
