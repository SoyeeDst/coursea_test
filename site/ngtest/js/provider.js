var module = angular.module('providerapp', []);

module.provider('HelloProvider', function() {
   return {
   	  $get : function() {
   	  	var name = '兽医的sample test';

   	  	var pes = function() {
   	  		return name;
   	  	}
   	  	return {
   	  		getPes : pes
   	  	}
   	  }
   }
});

module.controller('providerctrl', ['$scope', 'HelloProvider', 
   function($scope, HelloProvider) {
   	  $scope.pes = HelloProvider.getPes();
   }
]);

var module2 = angular.module('factoryapp', []);
module2.factory('helloFactory', function() {
	var name = '兽医的factory test';

	var pes = function() {
		return name;
	}

	return {
		getPes : pes
	}
});

module2.controller('factoryctrl', ['$scope', 'helloFactory',
	function($scope, helloFactory) {
   	  $scope.pes = helloFactory.getPes();
   }
]);

