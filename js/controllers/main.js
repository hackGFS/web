webApp
	.controller('MainController', function($scope){

		$scope.errorMessage = null;

		$scope.setError = function(message){

			$scope.errorMessage = message;

		}

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