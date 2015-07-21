// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'mainApp';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','login','user']);
mainApplicationModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'login/views/login.client.view.html'
            });
    }
]);
/*
mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }]);*/
