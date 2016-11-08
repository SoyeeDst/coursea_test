var module=angular.module('isolatedattr', []);
module.directive('isolatedattr', function() {
	return {
	   restrict : 'AE',
	   scope    : {},
	   template : '<div><input type = "text" ng-model="userName" />{{userName}}</div>',
	   replace  : true
	};
});