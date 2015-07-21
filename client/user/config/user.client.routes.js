/**
 * Created by YANGWI on 7/21/2015.
 */
angular.module('login').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/userlist', {
                templateUrl: 'user/views/userlist.client.view.html'
            });
    }

]);