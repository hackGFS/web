webApp
	.controller('MainController', function($scope, baseRouter, $http, $location){

		$scope.errorMessage = null;

		$scope.setError = function(message){

			$scope.errorMessage = message;

		}

		$scope.setLoggedIn = function(value){

			url = baseRouter.route('auth/check');

			$http.get(url).then(
				function(response){

					$scope.loggedIn = response.data.data;

					if(!$scope.loggedIn){

						$location.url('/');

					}

				});

		}

		$scope.setLoggedIn();

		$scope.setSuccess = function(message){

			$scope.successMessage = message;

		}

		$scope.showLoading = function(){

			angular.element('.overlay').fadeIn('fast', function(){});

		}

		$scope.hideLoading = function(){

			angular.element('.overlay').fadeOut('fast', function(){});

		}

	});