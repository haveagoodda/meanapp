/* global module, process, require */

// Invoke 'strict' JavaScript mode
'use strict';

// Load the correct configuration file according to the 'NODE_ENV' variable
module.exports = require('./env/' + process.env.NODE_ENV + '.js');

module.exports.nodeInstance = {
    port : process.env.NODE_HTTP_PORT || 3000
}