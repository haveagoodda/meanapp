

'use strict';

var express = require('express');

module.exports = function(app) {
    // Configure static file serving
    app.use('/client_modules',express.static('./client_modules'));
    app.use('/core',express.static('./core/client'));
    app.use('/',express.static('./client'));
};
