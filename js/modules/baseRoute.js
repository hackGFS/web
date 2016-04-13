angular.module('baseRoute', []).factory('baseRouter', function($location){
	return {
		route: function(string){

			if($location.host() == 'localhost'){

				url = "http://localhost:8888/hackgfs/email/api/public/"+string;

			} else {

				url = "https://club.hackgfs.io/api/public/"+string;

			}

			return url;
		}
	}
})