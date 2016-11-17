/**
 * Created by d on 2015/8/19.
 */
"use strict";
angular.module('myApp.user', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/user', {
                templateUrl: 'user/main/main.html'
            })
    }]);
