/**
 * Created by d on 2015/8/20.
 */
'use strict';
angular.module('myApp.showLog', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/showLog', {
                templateUrl: 'user/showLog/showLog.html',
                controller: 'showLogCtrl'
            })
            .when('/showMyExp',{
                templateUrl:'user/showLog/showMyExp.html',
                controller:'showMyExpCtrl'
        })
    }])
    //=======================================用户提交记录展示======================================================
    .controller('showLogCtrl', ['$http', '$scope', '$rootScope', 'Paginator', function ($http, $scope,$rootScope,Paginator) {
        //分页
        $scope.currentPage = 0;
        $scope.totalPage = 0;
        $scope.pageSize = 10;
        $scope.goToPage = 0;
        $scope.total = 0;
        $scope.q = {};

        //一进入该页面时加载
        var config = {
            params:{
                username:$rootScope.current_user_name
            }
        }
        $http.get('http://localhost:3000/users/getLog', config)
            .success(function (data) {
                alert(data.length+'');
                alert(data.exp_name);
                $scope.rows = data;
                $scope.total = data.length;
                $scope.totalPage = Math.ceil($scope.total / 10);
                $scope.endPage = $scope.totalPage;

            })
            .error(function () {
                alert("失败");
            });

        //载入
        $scope.load = function () {
            var config = {
                params:{
                    username:$rootScope.current_user_name
                }
            }
            $http.get('http://localhost:3000/users/getLog', config)
                .success(function (data) {
                    alert(data.length +'');
                    alert(data.exp_name);
                    $scope.rows = data;
                    $scope.total = data.length;
                    $scope.totalPage = Math.ceil($scope.total / 10);
                    $scope.endPage = $scope.totalPage;
                })
                .error(function () {
                    alert("失败");
                });
        }

        //下一页
        $scope.next = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).next();
            $scope.load();
        };
        //上一页
        $scope.prev = function () {
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

        $scope.showMyExp = function(exp_name){
            //alert('aaaaaa');
            var config = {
                params:{
                    exp_name:exp_name
                }
            }
            $http.get('http://localhost:3000/users/getExp',config)
                .success(function(data){
                    //$scope.rows = data;
                    //$scope.total = data.length;
                    //$scope.totalPage = Math.ceil($scope.total / 10);
                    //$scope.endPage = $scope.totalPage;
                    myService.set(data);
                })
                .error(function(){
                    alert('失败');
                })
        }



}])
    //=======================================实验详情展示======================================================
    .controller('showMyExpCtrl', ['$http', '$scope', '$rootScope', 'Paginator', function ($http, $scope,$rootScope,Paginator){

        //分页
        $scope.currentPage = 0;
        $scope.totalPage = 0;
        $scope.pageSize = 10;
        $scope.goToPage = 0;
        $scope.total = 0;
        $scope.q = {};

        //载入
        $scope.currentPage = 1;
        $scope.rows = myService.get();
        $scope.total1 = myService.get().length;
        $scope.totalPage1 = Math.ceil($scope.total1 / 10);
        $scope.endPage1 = $scope.totalPage1;

        $scope.load = function () {
            $scope.rows = myService.get();
            $scope.total = myService.get().length;
            $scope.totalPage = Math.ceil($scope.total / 10);
            $scope.endPage = $scope.totalPage;
        }

        //下一页
        $scope.next = function () {
            $scope.currentPage = Paginator($scope.currentPage, $scope.totalPage, $scope.goToPage).next();
            $scope.load();
        };
        //上一页
        $scope.prev = function () {
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

    }])

