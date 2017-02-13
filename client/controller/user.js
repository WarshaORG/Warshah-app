//make an angulare module called(myapp)
var myapp = angular.module('myapp');
//make a controller called (usercontr) inside myapp module
// the controller has a dependencies ['$scope','$http','$location','$roteparams',
//                                     function ($scope,$http,$location,$roteparams){}]	
}]
myapp.controller('usercContr',['$scope','$http','$location','$roteparams',function ($scope,$http,$location,$roteparams){
	// // inside the controller we wont to make a function that giv us the data of users from the database 
	// //by using $scope and $http at url(/api/users)
	// $scope.getusers = function(){
	// 	$http.get('/api/users').sucssess(function(responce){
	// 		$scope.users = responce;
	// 	})
	// }
	//this function make a signup for a new user 
	$scope.adduser = function(){
		$http.post('/api/user_signup',$scope.user).sucssess(function(){
			window.location.href = '#/index';
		})
	}

}])