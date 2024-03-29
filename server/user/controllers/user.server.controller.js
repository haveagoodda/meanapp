/**
 * Created by YANGWI on 7/20/2015.
 */
'use strict';
var mongoose = require('mongoose');
var UserSchema = mongoose.model('users');

module.exports.list = function(req, res) {


    UserSchema.find({})
        .exec(function(err,result) {
            res.json(result);
    });
};

module.exports.pagingList = function (req, res) {
    var pageInfo = req.body;
    var result = {};
    UserSchema.find().count().exec(
        function(err,cnt) {
            result.total = cnt;
            if(cnt > 0) {
                UserSchema.find()
                    .skip(pageInfo.page)
                    .limit(pageInfo.pageSize)
                    .exec(function(err,userList) {
                            result.userList = userList;
                            res.json(result);
                        });
            }

        }
    );


};
module.exports.delete = function(req, res) {
    UserSchema.remove({_id : req.params.id}).exec(function(err,result) {
        if(!err) res.json({message:'success'});
        res.end();
    });
};


module.exports.update = function(req, res) {
    UserSchema.update({_id:req.body._id},req.body).exec(function(err,result) {
        if(!err) res.json(result);
        res.end();
    });
};
module.exports.add = function(req, res) {
    console.info(req.body);
    var newUser = new UserSchema(req.body);
    newUser.save(function(err,result) {
        if(!err) res.json(result);
        res.end();
    });
};