var module = angular.module('httpapp', []);

module.controller('httpctrl', ['$scope', '$http', function($scope, $http) {
    $http({
       method : 'get',
       url    : 'data.json'
    }).success(function(data, status, headers, config) {
       console.log("data get successfully");
       $scope.users = data;
    }).error(function(data, stauts, headers, config) {
       console.log("error occurs during data loading");
       // should modify some elements style to show errors;
    }); 	
}]);