 angular.module('myapp', [
  'myapp.services',
  'myapp.user',
  'myapp.Tradeworker',
  'ngRoute'
])

.config(function($routeProvider){
	$routeProvider.when('/app/user/signup.html',{
		templateUrl:'./app/user/signup.html',                   
		controller:'usercContr'                  
	})
	.when('/app/user/login.html',{
		templateUrl:'/app/user/login.html',                   
		controller:'usercContr'                  
	})
	.when('/app/tradeworker/tradeworker.html',{
		templateUrl:'./app/tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.otherwise({
		redirectTo:'/'
	})
	
})