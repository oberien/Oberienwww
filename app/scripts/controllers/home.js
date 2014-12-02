'use strict';

angular.module('app')
	.controller('HomeCtrl', function ($scope) {
		$scope.prevSlide = function() {
			$("#carousel").carousel("prev");
		};

		$scope.nextSlide = function() {
			$("#carousel").carousel("next");
		};
	});
