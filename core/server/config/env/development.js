// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	logLevel: 'DEBUG',
	db: 'mongodb://localhost/meanapp',
	sessionSecret : 'developmentSessionSecret'
};
