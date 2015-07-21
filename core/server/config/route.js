'use strict';

module.exports = function(app) {
    require('../../../server/login/routes/login.server.routes.js')(app);
    require('../../../server/user/routes/user.server.routes.js')(app);
};