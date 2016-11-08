var module = angular.module('toggleapp', []);

module.controller('togglectrl', ['$scope', function($scope) {
   $scope.title = 'This is the title';
   $scope.content = 'This is the content';
}]);

module.directive('expander', function() {
   return {
   	  restrict : 'AE',
   	  replace : true,
   	  translude : true,
   	  scope : {
   	  	title : '@'
   	  },
   	  template : '<div><div ng-click="toggle()">{{title}}</div><div ng-show="showMe" ng-translude></div></div>',
      link : function(scope, element, attr) {
      	 scope.showMe = "false";
      	 scope.toggle = function() {
      	 	if (scope.showMe === 'false') {
      	 		scope.showMe = 'true';
      	 	} else {
      	 		scope.showMe = 'false';
      	 	}
      	 }
      }
   }
});
