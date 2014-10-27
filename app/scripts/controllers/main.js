'use strict';

angular.module('app')
	.controller('MainCtrl', function ($scope, $window) {
    if ($window.sessionStorage.site === undefined) {
      $window.sessionStorage.site = "home";
    }
    $scope.site = $window.sessionStorage.site;

    $scope.changeSite = function(site) {
      $scope.site = site;
      $window.sessionStorage.site = $scope.site;
    };
	});
