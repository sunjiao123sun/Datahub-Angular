/**
 * Created by d on 2015/8/22.
 */
'use strict';

angular.module('myApp.showData', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/showData', {
                templateUrl: 'user/showData/showData.html',
                controller:'showDataCtrl'
            });
    }])
    //=======================================显示系统可用数据集======================================================
    .controller('showDataCtrl', ['$http', '$scope',  '$rootScope', function ($http, $scope,  $rootScope) {
        //分页
        $scope.currentPage = 0;
        $scope.totalPage = 0;
        $scope.pageSize = 10;
        $scope.goToPage = 0;
        $scope.total = 0;
        $scope.q = {};

        //载入
        $scope.load = function () {
            var config = {
                params: {
                    enterpriseId: $rootScope.current_enterpriseId
                }
            };
            $http.get('http://localhost:3000/enterprise_manager/getRelationApply', config)
                .success(function (data) {
                    $scope.rows = data.data;
                })
                .error(function (data) {
                    alert("失败");
                });
        };
        //下一页
        $scope.next = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).next();
            $scope.load();
        };
        //上一页
        $scope.pre1 = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).prev();
            $scope.load();
        };
        //首页
        $scope.first = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).first();
            $scope.load();
        };
        //末页
        $scope.end = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).end();
            $scope.load();
        };
        //转到第几页
        $scope.go = function () {
            if ($scope.q.goToPage <= 1) {
                $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.p.goToPage).go();
                $scope.load();
            }
            else
                alert("页数超过限制");
        };
        $scope.currentPage = 1;
    }])
