angular.module('citrusService', []).factory('Citrus', function(){

	var sanitizer = {

		error: function(data){

			var data = data.data;

			angular.element('.t-error')

				.css('display', 'block')

				.animate({
				'margin-bottom':'0px',
				'opacity':'1',
			}, 700);

			angular.element('.t-error').delay('7000').fadeOut('fast', function(){
				
				angular.element('.toast')

					.css('margin-bottom', '-200px')
					.css('opacity', '.1');
			});

			return data.error;

		},

		success: function(){
			
			angular.element('.t-success')

				.css('display', 'block')

				.animate({
				'margin-bottom':'0px',
				'opacity':'1',
			}, 700);

			angular.element('.t-success').delay('7000').fadeOut('fast', function(){
				
				angular.element('.toast')

					.css('margin-bottom', '-200px')
					.css('opacity', '.1');
			});

		},

		decide: function(data){

			if(!sanitizer.parse(data)){
				message = sanitizer.error(data);

				proceed = false;

			} else {

				proceed = true;

			}

			return proceed;

		},

		parse: function(data){

			var data = data.data;
			
			if(data.success == 'error')
			{
				data = 0;
			};

			if (data.success == 'data') 
			{
				data = 1;
			};

			return data;
		},
	}

	return sanitizer;
})