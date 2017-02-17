<<<<<<< HEAD
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
=======
 angular.module('myapp',['myapp.UserController',
	'myapp.TradeworkerContr',
	'ngRoute',
	'myapp.services'
	])

.config(function($routeProvider){
	$routeProvider.when('/adduser',{
		templateUrl:'./user/signup.html',                   
		controller:'UserController'                  
>>>>>>> a9a225b2275421949c5d482d3ffde194fde9495d
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