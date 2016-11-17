/**
 * Created by d on 2015/8/19.
 */

'use strict';

angular.module('myApp.studentInfoManage', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/studentInfoManage', {
                templateUrl: 'user/studentInfoManage/studentInfoManage.html',
                controller:'studentInfoManageCtrl'
            });
    }])
    //=======================================������Ϣչʾ======================================================
    .controller('studentInfoManageCtrl', ['$http', '$scope',  '$rootScope', function ($http, $scope,  $rootScope) {

        var config = {
            params:{
                username:$rootScope.current_user_name
            }
        };

        $http.get('http://localhost:3000/users/getpersonalInfo', config).success(function (data, status, headers, config) {
            $scope.user = {
                username: data[0].username,
                address: data[0].address,
                telephone: data[0].telephone,
                email: data[0].email
            };

        }).error(function (data, status, headers, cpnfig) {
            alert("����");
        });

        $scope.modifyUser = function () {
            var config = {
                params: {
                    current_username:$rootScope.current_user_name,
                    username: $scope.user.username,
                    telephone: $scope.user.telephone,
                    email: $scope.user.email,
                    address: $scope.user.address
                }
            };
            $http.get('http://localhost:3000/users/modifyUser', config).success(function (data) {

                alert('Successfully Updated! ');

                //��������⣬�����Ϣû������������ͷ���
                if (data.message == '�޸ĳɹ�'){
                    alert('�޸ĳɹ�');
                }
                else if(data.message == '�޸�ʧ��'){
                    alert('�޸�ʧ��');
                }

            }).error(function (data, status, headers, cpnfig) {
                alert("�޸�ʧ��");
            });

            alert($scope.user.username + $scope.user.address);

        };
    }])

