/**
 * Created by d on 2015/8/19.
 */
angular.module('myApp.studentInfoMenu', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/studentInfoMenu', {
                templateUrl: 'user/studentInfoMenu/studentInfoMenu.html'
            });
    }]);