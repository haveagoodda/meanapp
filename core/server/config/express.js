'use strict';

var path = require('path'),
    config = require('./config'),
    route = require('./route'),
    staticRoute = require('./static-route'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session);


    module.exports = function(passedApp, mongoDB) {
    var app = passedApp || express();
    app.set('trust proxy', true);

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compress());
    }

    // Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    var mongoStore = new MongoStore({
        mongooseConnection: mongoDB.connection,
        touchAfter: 24 * 3600, // Updating the session only every 24 hours.
        autoRemove: 'interval',
        autoRemoveInterval: 30 // Removing expired sessions every 30 minutes.
    });

    app.use(session({
        name: 'FREEMIUMSS_SESSIONID',
        saveUninitialized: true,
        resave: false,
        secret: config.sessionSecret,
        cookie: {maxAge: null}, // valid in session
        store: mongoStore
    }));

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');

    staticRoute(app);
    route(app);

    return app;
}