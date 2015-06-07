'use strict';

var app = angular.module('circuit.virtual.receptionist', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
   
  .when('/login/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when('/logout/', {
    templateUrl: 'partials/login.html',
    controller: 'LogoutCtrl'
  })
  .when('/done', {
    templateUrl: 'partials/done.html',
    controller: 'DoneCtrl'
  })
  .when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'RegisterCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });


  // configure html5 to get links working on jsfiddle

  $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

});


