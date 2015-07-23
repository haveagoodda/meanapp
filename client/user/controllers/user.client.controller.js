/**
 * Created by YANGWI on 7/21/2015.
 */
'use strict';
angular.module('user').controller('UserController', ['$scope', '$http', function ($scope, $http) {
    $scope.init = function () {
        $scope.showMessage = false;
        $http.get('/api/user/list')
            .success(function (result) {
                $scope.resultList = [];
                result.forEach(function(user){
                    $scope.resultList.push({user:user,readonly:true});
                });
            });
    };

    $scope.delete = function (_id) {
        if(!_id) {
            removeUser(_id);
            return;
        }
        $http.delete('/api/user/' + _id)
            .success(function (result) {
                if (result) {
                    showMessage(result.message);
                }
            });
    };

    $scope.save = function (row) {
        row.readonly = true;
        if (row.user._id) {
            $http.post('/api/user', row.user)
                .success(function (result) {
                    if (result) {
                        showMessage('save success!');
                    }
                });
        } else {
            if (row.user.username && row.user.password) {
                $http.put('/api/user', row.user)
                    .success(function (result) {
                        if (result) {
                            showMessage('save success!');
                        }
                    });
            }
        }


    };

    $scope.edit = function(row) {
        row.readonly = false;
    };

    $scope.add = function () {
        $scope.resultList.push({});
    };

    function removeUser(id) {
        if (!id) {
            $scope.resultList.pop();
            return;
        }
        for (var index in $scope.resultList) {
            if ($scope.resultList[index].user._id == id) {
                $scope.resultList.removeAt(index);
            }
        }
    }

    function showMessage(message) {

        $scope.showMessage = true;
        $scope.message = message;
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.showMessage = false;
            });
        }, 1000);

    }
}]);