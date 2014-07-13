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
var ObjectID = require('mongodb').ObjectID;
var env = require('./environment');

var settings = prop.createEditor(env.property);
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
    MongoClient.connect(env.mongodb, fn);
  },

  next: function(count, done) {
    var cursor = settings.get('curosr');
    var id = ObjectID.createFromHexString(cursor);
    var cond = cursor ? { _id : { "$gt" : id } } : {};
    var options = { sort: { "_id": 1 }, limit : count };

    var fn = function(err, docs) {
      if (err) {
        return done(err);
      }
      var last = docs.slice(-1)[0];
      var cursor = last._id.toHexString();
      settings.set('curosr', cursor);
      settings.save(env.property);
      done(err, docs);
    };

    db.collection('themes').find(cond, options, fn);
  }
};

exports = module.exports = dataSource;
