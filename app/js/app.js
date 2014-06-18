'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/queue', {templateUrl: 'partials/queue.html', controller: 'queueController'});
  $routeProvider.when('/report', {templateUrl: 'partials/report.html', controller: 'reportController'});
  $routeProvider.when('/instructions', {templateUrl: 'partials/instructions.html'});
  $routeProvider.otherwise({redirectTo: '/queue'});
}]);
