/**
 * Created by d on 2015/8/22.
 */
'use strict';

angular.module('myApp.upLoadMenu', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/upLoadMenu', {
                templateUrl: 'user/upLoadMenu/upLoadMenu.html',
                controller:'upLoadMenuCtrl'
            });
    }])
    //=======================================ÉÏ´«²Ëµ¥======================================================
    .controller('upLoadMenuCtrl', ['$http', '$scope',  '$rootScope', function ($http, $scope,  $rootScope) {

    }])
