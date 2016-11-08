var module=angular.module('DirectiveApp',[]);
module.directive('firstdirective', function(){
	// Runs during compile
	return {
		restrict : 'AEMC',
		template : '<div>YOXI</div>',
		replace  : true
	};
});
