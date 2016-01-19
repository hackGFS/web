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

	 		.when('/home', {
	    		templateUrl: 'views/dash/dash.html',
	    		controller: 'DashController',
	 		})

	 		.when('/sponsor', {
	    		templateUrl: 'views/mail/sponsor.html',
	    		controller: 'SponsorController',
	 		})
	 	;

	});