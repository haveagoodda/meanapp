'use strict';
/*angular.module('login').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/views/login.client.view.html'
            });
    }
]);*/
angular.module('login').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('login', {
                url : '/login',
                templateUrl: 'login/views/login.client.view.html'

            });
    }
]);