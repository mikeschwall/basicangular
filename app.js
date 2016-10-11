angular.module("myapp",['ngRoute','myController'])
	.config(["$routeProvider", function($routeProvider) {
		
		
		$routeProvider
		
			.when('/page1',{
				
				templateUrl: "page1.html",
				controller: "controller1"
				
				
				
			})
			
			.when('/page2',{
				
				templateUrl:"page2.html",
				controller:"controller2"
				
				
			})
			
			.when('/page3',{
				
				
				templateUrl:"page3.html",
				controller:"controller3"
				
				
				
			})
			
			.when('/page4',{
				
				templateUrl:"page4.html",
				controller:"controller4"
				
				
				
			})
			
			.otherwise({
				
				redirectTo:"/page1"
				
				
			})
		
		
		
	}]);