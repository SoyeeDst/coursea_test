var module = angular.module("UserInfoModule", []);
module.controller("UserInfoCtrl", ['$scope', function($scope) {
	$scope.userInfo = {
        email:"21755664@qq.com",
        password:"littlegua",
        autoLogin:true
	};

	$scope.getData = function() {
	    alert($scope.userInfo.email + '$' +  $scope.userInfo.password + "$" + $scope.userInfo.autoLogin);
	}

	$scope.resetAutoLogin = function() {
		$scope.userInfo.email = 'ptianju@163.com';
	}
}])