'use strict';

/**
 * @ngdoc function
 * @name restFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restFeApp
 */
angular.module('restFeApp')
  .controller('MainCtrl', function ($scope, $timeout, MainSrvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id = null;

    $scope.allPatientsData = MainSrvc.query();

    console.log(JSON.stringify($scope.allPatientsData));

  });
