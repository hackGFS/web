webApp
	.controller('DashController', function($scope, $http, baseRouter, Citrus){

		url = baseRouter.route('mail/all');

		$http.get(url).then(
			function(response){

				$scope.emails = response.data.data;

				console.log($scope.emails);

			});

	});