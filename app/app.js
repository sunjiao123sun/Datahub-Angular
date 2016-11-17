'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    //add by dataHub project
    'myApp.paginator',//分页
    'myApp.user',
    'myApp.studentInfoMenu',
    'myApp.studentInfoManage',
    'myApp.showLog',
    'myApp.myService',
    //'myApp.showMyExp',
    'myApp.upLoadMenu',
    'myApp.upAndDownLoad',
    'myApp.showDataMenu',
    'myApp.showData'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'view1/index.html',
                controller: 'mainCtrl'
            })

            .when('/tab', {
                templateUrl: 'tab.html',
                controller: 'userCtrl'
            })
    }])

    .controller('mainCtrl', ['$scope', function ($scope) {
        //alert("hello");
    }])
