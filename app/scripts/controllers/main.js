'use strict';

/**
 * @ngdoc function
 * @name restFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restFeApp
 */
angular.module('restFeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
