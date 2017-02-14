//make an angulare module called(myapp)
 angular.module('myapp.TradeworkerContr',[]);
//make a controller called (usercontr) inside myapp module
// the controller has a dependencies ['$scope','$http','$location','$roteparams',

myapp.controller('TradeworkerContr',function ($scope,$http,$location){
	// inside the controller we wont to make a function that giv us the data of handworkers from the database 
	//by using $scope and $http at url(/api/users)
	$scope.getTradeworker = function(){
		$http.get('/api/handworkers').sucssess(function(response){
			$scope.handworkers = response;
		})
	}
	//this function make a signup for a new handworker 
	$scope.addhandworker = function(){
		//this will make apost with information about user from the input tage in the user html page  
		$http.post('/api/handwoker_signup',$scope.user).sucssess(function(){
			// this will make a redirect to the page 
			window.location.href = '#/index';
		})
	}

})