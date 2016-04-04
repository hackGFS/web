webApp
	.controller('DashController', function($scope, $http, baseRouter, Citrus, $interval, Mail){

		$scope.load = function(){

			url = baseRouter.route('mail/all');

			$http.get(url).then(
				function(response){

					$scope.emails = response.data.data;

					console.log($scope.emails);

				});

		}

		$scope.load();

		$interval(function(){

			$scope.load();

		}, 10000);

		$scope.delete = function(id){

			//console.log(id);

			Mailman = new Mail(id);

			Mailman.delete().then(

	    	function(response){

		        if(Citrus.decide(response)){

		          $scope.setSuccess(response.data.data);

		          $scope.load();

		          Citrus.success();

		        } else {

		          $scope.setError(response.data.error);

		        }

	      	});

		}

	});