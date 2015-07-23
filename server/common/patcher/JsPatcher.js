/**
 * Created by YANGWI on 7/23/2015.
 */
'use strict';
/*

Be carefull with this file

*/


module.exports = function () {
    Array.prototype.removeAt = function (index) {
        return this.splice(index, 1);
    };
};