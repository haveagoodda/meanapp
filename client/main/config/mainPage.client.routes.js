/**
 * Created by YANGWI on 7/23/2015.
 */
angular.module('mainPage').config(['$stateProvider',

    function($stateProvider) {
        //$stateProvider.otherwise('/mainPage');
        $stateProvider
            .state('mainPage',{
                url : '/main',
                views : {
                    '' : {
                        templateUrl : 'main/views/main.client.view.html'
                    },
                    'nav@mainPage' : {
                        templateUrl : 'main/views/mainNav.client.view.html'
                    },
                    'content@mainPage' : {
                        templateUrl : 'main/views/mainHome.client.view.html'
                    }
                }
            })
            .state('mainPage.home',{
                url : '',
                views : {
                    'content@mainPage' : {
                        templateUrl : 'main/views/mainHome.client.view.html'
                    }
                }
            })
            .state('mainPage.user',{
                url : '/userlist',
                views : {
                    'content@mainPage' : {
                        templateUrl : 'user/views/userlist.client.view.html'
                    }
                }
            });
    }
]);