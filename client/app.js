var myapp = angular.module('myapp',['ngRoute']);

myapp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'',                   //TO DO.....
		templateUrl:''                   //TO DO.....
	})
	.when('/handwokers',{
		controller:'',                   //TO DO.....
		templateUrl:'handworkerContr'
	})
	.when('/handwoker_signup',{
		controller:'',                  //TO DO.....
		templateUrl:'handworkerContr'
	})
	.when('/user_signup',{
		controller:'usercContr',
		templateUrl:''                 //TO DO.....
	})
	.otherwise({
		redirectTo:'/'
	})
	
})