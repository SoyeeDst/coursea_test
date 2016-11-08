var module2=angular.module('DirectiveApp3',[]);

module2.controller('DirectiveCtrl3', ['$scope', function($scope) {
     $scope.loadData = function() {
     	console.log("It is loading data now~~~");
     }
}]);

module2.controller('DirectiveCtrl4', ['$scope', function($scope) {
     $scope.loadData2 = function() {
     	console.log("It is loading data222 now~~~");
     }
}]);

module2.directive('loader', function(){
	return {
		restrict : 'AE',
		link : function(scope, element, attribute) {
			element.bind('mouseover', function() {
                // scope.loadData();
                scope.$apply(attribute.howtoload);
			});
		}
	}
});