/*
 * anthata
 * https://github.com/bitdewy/anthmigrate
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var prop = require('properties-parser');
var MongoClient = require('mongodb').MongoClient;
var settings = require('./settings');

var properties = prop.createEditor(settings.property);
var db = null;

var dataSource = {

  connect: function(done) {
    var fn = function(err, result) {
      if (err) {
        return done(err);
      }
      db = result;
      done(err, db);
    };
    MongoClient.connect(settings.mongodb, fn);
  },

  next: function(count, done) {
    var cursor = properties.get('curosr');
    var id = cursor;
    var cond = cursor ? { _id : { "$gt" : id } } : {};
    var options = { sort: { "_id": 1 }, limit : count || 10 };

    var fn = function(err, docs) {
      if (err) {
        return done(err);
      }

      var cursor = docs ? docs[docs.length - 1]._id : '';
      properties.set('curosr', cursor);
      properties.save(settings.property);
      done(err, docs);
    };

    db.collection('themes').find(cond, options).toArray(fn);
  }
};

exports = module.exports = dataSource;
