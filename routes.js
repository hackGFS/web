webApp
	.config(function($routeProvider, $locationProvider) {
		$routeProvider

			.when('/', {

	    		templateUrl: 'views/auth/login.html',
	    		controller: 'AuthController',
	  		})

	   		.when('/register', {
	    		templateUrl: 'views/auth/register.html',
	    		controller: 'AuthController',
	 		})
	 	;

	});