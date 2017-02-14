//make an angulare module called(myapp)
 angular.module('myapp.user',[]);
//make a controller called (usercontr) inside myapp module
// the controller has a dependencies ['$scope','$http','$location','$roteparams',
//                                     function ($scope,$http,$location,$roteparams){}]	
.controller('user',function ($scope,$http,$location,User){
	$scope.user = {};

	  $scope.signin = function () {
	    User.signin($scope.user)
	      .then(function () {
	        // $window.localStorage.setItem('com.shortly', token);
	        $location.path('/');
	      })
	      .catch(function (error) {
	        console.error(error);
	      });
	  };

	  $scope.signup = function () {
	    User.signup($scope.user)
	      .then(function () {
	        // $window.localStorage.setItem('com.shortly', token);
	        $location.path('/');
	      })
	      .catch(function (error) {
	        console.error(error);
	      });
	  };
})