var module = angular.module("ColorApp", []);
module.controller("ColorCtrl", ['$scope', function($scope) {
	$scope.isBlue = false;
	$scope.isRed = true;

	$scope.exchange = function() {
	   $scope.isBlue = !$scope.isBlue;
	   $scope.isRed = !$scope.isRed;
	};
}])