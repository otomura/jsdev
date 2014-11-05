define(['jquery','underscore','backbone'],function($, _, Backbone){

	var Car =  Backbone.Model.extend({
	
		defaults:{
			kind : '',
			capacity:0
		},
		
		parse: function(response){
			response.id = response._id;
			return response;
		}
		
	});
	
	return Car;
});
