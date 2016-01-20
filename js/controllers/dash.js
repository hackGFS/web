webApp
	.controller('DashController', function($scope, $http, baseRouter, Citrus, $interval){

		$scope.load = function(){

			url = baseRouter.route('mail/all');

			$http.get(url).then(
				function(response){

					$scope.emails = response.data.data;

				});

		}

		$scope.load();

		$interval(function(){

			$scope.load();

		}, 10000);

	});