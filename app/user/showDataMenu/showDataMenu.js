/**
 * Created by d on 2015/8/22.
 */
angular.module('myApp.showDataMenu', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/showDataMenu', {
                templateUrl: 'user/showDataMenu/showDataMenu.html'
            });
    }]);