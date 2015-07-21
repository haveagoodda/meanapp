'use strict'

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    // Use Mongoose to connect to MongoDB
    var db = mongoose.connect(config.db);
    mongoose.connection.on('error', function () {
        console.log("Connect to DB " + config.db + " error!");
    });

    mongoose.connection.on('connected', function () {
        console.log('Mongoose connected to ' + config.db);
    });

    // Load the application models 
    require('../../../server/user/models/user.server.model');


    return db;
};