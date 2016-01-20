webApp
	.controller('SponsorController', function($scope, $http, baseRouter, Citrus){

		$scope.formData = {};

		$scope.formData.section = {};

		$scope.getSection = function(section){

			url = baseRouter.route('mail/section');

			url = url + '?section=' + section + '&name=' + encodeURI($scope.formData.name);

			$http.get(url).then(
				function(response){

					if(Citrus.decide(response)){

						$scope.section = response.data.data;

						$scope.section = $scope.section.replace("<br><br>", "");	

						angular.element('#sectionModal').modal('toggle');					

					} else {

						$scope.setError(response.data.error);

					}

				});

		}

		$scope.send = function(){

			url = baseRouter.route('mail/sponsor');

			$scope.showLoading();

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						$scope.setSuccess('Your email has been successfully sent! Why not send another?');

						Citrus.success();

						$scope.formData = {};

						$scope.formData.section = {};

					} else {

						$scope.setError(response.data.error);

					}

				});

		}

	})

	.controller('MailDetailController', function($scope, $http, baseRouter, Citrus, $location){


	});;