'use strict';

/**
 * @ngdoc function
 * @name restFeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the restFeApp
 */
angular.module('restFeApp')
  .controller('AboutCtrl', function ($scope, $timeout, MainSrvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.allPatientsData = MainSrvc.query();

  });
