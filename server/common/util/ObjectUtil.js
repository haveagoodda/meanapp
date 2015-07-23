/**
 * Created by YANGWI on 7/23/2015.
 */
'use strict';

var fn = {};

fn.isEmpty = function (o) {
    for (var _ in o) return false;
    return true;
};







module.exports = fn;