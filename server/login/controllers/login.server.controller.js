/**
 * Created by YANGWI on 7/20/2015.
 */
'use strict';
var mongoose = require('mongoose');
var UserSchema = mongoose.model('users');
var objectUtil = require('../../common/util/ObjectUtil');
module.exports.index = function(req, res) {
    res.render('index',{title:'Demo'});
};

module.exports.login = function (req, res) {
    if (objectUtil.isEmpty(req.body)) {
        res.end();
        return;
    }
    UserSchema.findOne(req.body).exec(function (err, result) {
        if (!err) {
            if (result) {
                req.session.user = result;
            }
            res.json(result);
        }
    });
};

