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
    //=======================================��ʾϵͳ�������ݼ�======================================================
    .controller('showDataCtrl', ['$http', '$scope',  '$rootScope', function ($http, $scope,  $rootScope) {
        //��ҳ
        $scope.currentPage = 0;
        $scope.totalPage = 0;
        $scope.pageSize = 10;
        $scope.goToPage = 0;
        $scope.total = 0;
        $scope.q = {};

        //����
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
                    alert("ʧ��");
                });
        };
        //��һҳ
        $scope.next = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).next();
            $scope.load();
        };
        //��һҳ
        $scope.pre1 = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).prev();
            $scope.load();
        };
        //��ҳ
        $scope.first = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).first();
            $scope.load();
        };
        //ĩҳ
        $scope.end = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).end();
            $scope.load();
        };
        //ת���ڼ�ҳ
        $scope.go = function () {
            if ($scope.q.goToPage <= 1) {
                $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.p.goToPage).go();
                $scope.load();
            }
            else
                alert("ҳ����������");
        };
        $scope.currentPage = 1;
    }])
