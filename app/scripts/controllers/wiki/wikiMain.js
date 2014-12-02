'use strict';

angular.module('app')
	.controller('WikiMainCtrl', function ($scope, $window, $location) {
		if ($window.sessionStorage.site === undefined) {
     		$window.sessionStorage.site = "home";
    	}
    	$scope.site = $window.sessionStorage.site;

    	$scope.changeSite = function(site) {
      	$scope.site = site;
      	$window.sessionStorage.site = $scope.site;
    	};

      $scope.home = function() {
        $location.path("/");
      };
	});
