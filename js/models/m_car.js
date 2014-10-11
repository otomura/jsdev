MyApp.Models.Car = Backbone.Model.extend({
	defaults:{
		kind : '',
		capacity:0
	},
	parse: function(response){
	  response.id = response._id;
	  return response;
	}
});
