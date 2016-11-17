'use strict';

angular.module('myApp.view2', ['ngRoute']).run(['$rootScope', function ($rootScope) {
    $rootScope.authenticated = false;
    $rootScope.current_user_name = '';
    $rootScope.current_user_address = '';
    $rootScope.current_user_email = '';
    $rootScope.current_user_phone = '';
    $rootScope.current_enterpriseId = '';
}])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        })
    }])

    .controller('View2Ctrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
        $scope.user = {email: '', password: ''};

        $scope.response = {
            message: '',
            employee: {
                name: '',
                address: '',
                phone: '',
                email: '',
                status: '',
                createTime: '',
                lastModifyTime: ''
            }
        };
        $scope.login = function () {
            var config = {
                params: {
                    username: $scope.user.username
                }
            };
            $http.get('http://localhost:3000/login/checkUser', config)
                .success(function (data) {
                    if (data.length != 0) {//若返回结果为失败
                        //alert('验证成功');

                        //利用rootScope使用户姓名一致
                        $rootScope.authenticated = true;
                        $rootScope.current_user_name = $scope.user.username;


                        var config = {params:{username: $scope.user.username,password:$scope.user.password}};
                        $http.get('http://localhost:3000/login/login', config)
                            .success(function (data) {
                                if (data.length != 0) {
                                    var role = '';
                                    //alert("data.role.total" + data.role.length);
                                        if (data[0].role === 'student') {
                                            role = 'student';
                                            //alert(role);
                                        }else if(data[0].role === 'teacher'){
                                            role = 'teacher';
                                        }
                                    $rootScope.current_user_role = role;

                                    if (role === 'student') {
                                        $location.path('/user').replace();
                                    } else if (role === 'teacher') {
                                        $location.path('/teacher').replace();
                                    }
                                    //$location.path('/user').replace();
                                }
                                else{
                                    alert("用户名或密码错误");
                                }
                            }
                        ).error(function (data, status, headers, config) {
                                alert("用户名或密码错误");
                            })
                    }
                    else{
                        alert("用户名或密码错误");
                    }
                })
                .error(function (data) {
                    alert("用户名或密码错误");
                });
        };


    }]);