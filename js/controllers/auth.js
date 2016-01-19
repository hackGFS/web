webApp
	.controller('AuthController', function($scope, $http, baseRouter, Citrus, $location){
		
		$scope.formData = {};

		$scope.loggedIn = false;

		$scope.login = function()
		{
			url = baseRouter.route('auth/login');

			$scope.showLoading();

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					$scope.formData = {};

					if(Citrus.decide(response)){

						$scope.setLoggedIn();



						$location.url('home')						

					} else {

						$scope.setError(response.data.error);

					}


				}
			);
			
		}

		$scope.register = function()
		{
			url = baseRouter.route('auth/register');

			$scope.formData.theme = "teal";

			$scope.showLoading();

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					$scope.formData = {};

					if(Citrus.decide(response)){

						$scope.setSuccess('Your account has been registered! Please check your email for an activation link!');

						Citrus.success();

					} else {

						$scope.setError(response.data.error);

					}

				}
			);
			
		}
	})