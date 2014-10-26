'use strict';

angular.module('app')
	.controller('MainCtrl', function ($scope) {
		$scope.inputText = "";

		$scope.buttonClicked = function() {
			alert("Button Clicked: " + $scope.inputText);
		};

		$scope.inputChanged = function() {
			$scope.inputText = $scope.inputText.toUpperCase();
		};
	});
