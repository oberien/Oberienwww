'use strict';

angular
	.module('app', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/wiki', {
				templateUrl: 'views/wiki/main.html',
				controller: 'WikiMainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
