'use strict';

angular.module('myApp.view1', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.user = {username: '', password: '', phone: '', email: '', address: '',role:''};
        $scope.register = function () {
            alert($scope.user.username + $scope.user.address + $scope.user.password + $scope.user.phone + $scope.user.email+$scope.user.role);
            var config = {
                params: {
                    username: $scope.user.username,
                    telephone: $scope.user.telephone,
                    email: $scope.user.email,
                    address: $scope.user.address,
                    password:$scope.user.password,
                    role:$scope.user.role

                }
            };
            $http.get('http://localhost:3000/users/register', config).success(function (data, status, headers, config) {
                if (data.message == '注册成功') {
                    alert('注册成功');
                    $location.path('/view2');
                }
                else{
                    alert('注册失败，请重新注册');
                }

            }).error(function (data, status, headers, config) {
                alert("注册失败，请重新注册");
            })
        };
    }]);