'use strict';
angular.module('mainPage').controller('MainPageController',['$scope','$location','$state',function($scope,$location,$state){

    $scope.init = function() {
        $scope.currentPage = $state.current.name;
    };
    $scope.changePage = function(to) {
        $scope.currentPage = to;
    }
}]);