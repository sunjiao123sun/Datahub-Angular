/**
 * Created by d on 2015/8/22.
 */
'use strict';

angular.module('myApp.upAndDownLoad', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/upAndDownLoad', {
                templateUrl: 'user/upAndDownLoad/upAndDownLoad.html',
                controller:'upAndDownLoadCtrl'
            });
    }])
    //============================================================================================
    .controller('upAndDownLoadCtrl', ['$http', '$scope',  '$rootScope', function ($http, $scope,  $rootScope) {

    }])
