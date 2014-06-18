'use strict';

/* Controllers */

var myControllerModule = angular.module('myApp.controllers', []);


myControllerModule.controller('queueController', function($scope) {

  $scope.message = ""
  $scope.sizes = ['small', 'large'];
  $scope.types = ['cargo', 'passenger'];    var result = "none";

  $scope.enqueue = function() {
    $scope.message = $scope.selectedSize + " " + $scope.selectedType + " aircraft selected.";
    $scope.message += "... add your code to make this happen ... ";
  };

  $scope.dequeue = function () {
    $scope.message = "... here state which aircraft was dequeued ...";

  };

});


myControllerModule.controller('reportController', function($scope) {

  $scope.numberOfAircraftRemaining = "print the number of aircraft remaning";

  $scope.totalAircraftEnqueued = "print the total of all aircraft enqueued";

  $scope.totalAircraftDequeued = "print the total of all aircraft dequeued";

});
