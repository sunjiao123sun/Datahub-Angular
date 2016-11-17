/**
 * Created by d on 2015/8/23.
 */
'use strict';
var myService = angular.module('myApp.myService', ['ngRoute']);
    myService.factory('myService', function() {
    var savedData = {};
        function set(data) {
            savedData = data;
         }

         function get() {
            return savedData;
         }

         return {
             set: set,
             get: get
        }

})