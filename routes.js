webApp
	.config(function($routeProvider, $locationProvider) {
		$routeProvider

			.when('/', {
	    		templateUrl: 'views/auth/login.html',
	    		controller: 'AuthController',
	  		})

	  		.when('/activate/:activationCode', {
	    		templateUrl: 'views/auth/activate.html',
	    		controller: 'ActivateController',
	  		})

	  		.when('/reset/:resetCode', {
	    		templateUrl: 'views/auth/resetPassword.html',
	    		controller: 'ResetController',
	  		})

	   		.when('/register', {
	    		templateUrl: 'views/auth/register.html',
	    		controller: 'AuthController',
	 		})

	 		.when('/reset', {
	    		templateUrl: 'views/auth/reset.html',
	    		controller: 'ResetController',
	 		})

	 		.when('/home', {
	    		templateUrl: 'views/dash/dash.html',
	    		controller: 'DashController',
	 		})

	 		.when('/sponsor', {
	    		templateUrl: 'views/mail/sponsor.html',
	    		controller: 'SponsorController',
	 		})

	 		.when('/rank', {
	    		templateUrl: 'views/rank/rank.html',
	    		controller: 'LeaderboardController',
	 		})

	 		.when('/mail/:mailId', {
	    		templateUrl: 'views/mail/detail.html',
	    		controller: 'MailDetailController',
	 		})
	 	;

	});