var module = angular.module('isolatedattrbind', []);
module.controller('isiolatedattrctrl', ['$scope', function($scope) {
    $scope.value='Hello world';
}]);

module.directive('singledirectionbinding', function() {
    return {
    	restrict : 'AE',
    	template : '<div>来自directive中的值: <input type = "text" value = {{flavor}}></input></div>',
    	scope : {
    		flavor : "@"
    	}, 
    	replace  : true,
    	translude : false
    }
});