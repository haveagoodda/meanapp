'use strict';

module.exports = function(app) {
    app.route('/')
        .get(require('../controllers/login.server.controller.js').index);
    app.route('/login')
        .post(require('../controllers/login.server.controller.js').login);
};
