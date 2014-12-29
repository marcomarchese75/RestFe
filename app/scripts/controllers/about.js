'use strict';

/**
 * @ngdoc function
 * @name restFeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the restFeApp
 */
angular.module('restFeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
