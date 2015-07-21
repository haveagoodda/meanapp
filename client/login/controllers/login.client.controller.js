// Invoke 'strict' JavaScript mode
'use strict';

angular.module('login').controller('LoginController',['$scope','$http','$location',function($scope,$http,$location) {

    $scope.login = function() {
        $http
            .post('/login',$scope.user)
            .success(function(result){
                if(!result || result.length == 0) {
                    $scope.message = 'Login failure';
                } else {
                    $location.path('/userlist');
                }
            });
    }
}]);