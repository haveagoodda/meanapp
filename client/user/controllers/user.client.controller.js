/**
 * Created by YANGWI on 7/21/2015.
 */
angular.module('user').controller('UserController', ['$scope', '$http', function ($scope, $http) {
    $scope.init = function () {
        $scope.showMessage = false;
        $http.get('/api/user/list')
            .success(function (result) {
                console.info(result);
                $scope.userlist = result;
            });
    };

    $scope.delete = function(_id) {
        console.info(_id);
        $http.delete('/api/user/'+_id)
            .success(function(result) {
                if (result){
                    showMessage(result.message);
                    removeUser(_id);
                }
            });
    };

    $scope.save = function(user) {
        if (user._id) {
            $http.post('/api/user',user)
                .success(function(result){
                    if (result){
                        showMessage('save success!');
                    }
                });
        } else {
            if (user.username && user.password) {
                $http.put('/api/user',user)
                    .success(function(result){
                        if (result){
                            showMessage('save success!');
                        }
                    });
            }
        }


    };

    $scope.add = function() {
        $scope.userlist.push({});
    };

    function removeUser(id) {
        for(var index in $scope.userlist) {
            if($scope.userlist[index]._id == id) {
                $scope.userlist.splice(index,1);
            }
        }
    }
    function showMessage(message) {

            $scope.showMessage = true;
            $scope.message = message;
            setTimeout(function () {
                $scope.$apply(function() {
                    $scope.showMessage = false;
                });
            }, 1000);

    }
}])