var module2=angular.module('DirectiveApp2',[]);

module2.directive('mydirective', function(){
	// Runs during compile
	return {
		restrict : 'AEMC',
		templateUrl : 'http://www.baidu.com',
		replace  : true
	};
});