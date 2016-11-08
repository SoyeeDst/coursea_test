var helloApp = angular.module("helloApp", []);

helloApp.controller("HelloCtrl", function($scope, $rootScope) {
    $scope.name = "Calvin Hobbes";
    $rootScope.fuck = "wo ri ni ma yo";
});

helloApp.directive('hello', ['', function(){
	// Runs during compile
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div>SHIT</div>',
		// templateUrl: '',
		replace: true
	};
}]);