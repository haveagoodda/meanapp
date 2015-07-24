/**
 * Created by Willam Yang on 7/24/2015.
 */
'use strict';

var fn = {};

fn.generateList = function (number) {
    var i= 0,array = [];
    for(;i<number;i++) {
        array.push(number);
    }
    return array;
};


module.exports = fn;