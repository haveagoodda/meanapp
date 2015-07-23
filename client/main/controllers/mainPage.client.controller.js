
angular.module('mainPage').controller('MainPageController',['$scope','$location',function($scope,$location){

    $scope.init = function() {
        $scope.currentPage = $location.$$url.split('/').reverse()[0];
    };
    $scope.changePage = function(to) {
        $scope.currentPage = to;
    }
}]);