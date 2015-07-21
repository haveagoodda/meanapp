'use strict';

var userController = require('../controllers/user.server.controller.js');
module.exports = function(app) {
    app.route('/api/user/list')
        .get(userController.list);
    app.route('/api/user/:id')
        .delete(userController.delete);
    app.route('/api/user')
        .post(userController.update)
        .put(userController.add);
};
