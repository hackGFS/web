webApp
	.controller('SponsorController', function($scope, $http, baseRouter, Citrus){

		$scope.formData = {};

		$scope.send = function(){

			console.log($scope.formData);

		}

	});