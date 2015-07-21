'use strict';

process.env.Node_ENV = process.env.Node_ENV || 'development';
var config = require('./core/server/config/config');
var port = config.nodeInstance.port;

var http = require('http'),
    bodyParser = require('body-parser'),
    mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');

var db = mongoose();

var app = require('express')();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 20000,
    limit: 1024 * 1024 * 20
}));

app = express(app, db);

server.listen(port);
console.log('server listen on port' + port);
module.exports = app;