define(['jquery','underscore','backbone'],function($, _, Backbone){

	var Navbar =  Backbone.View.extend({

		el: "body [role=navigation]",

		events : {
			'click #brand' : 'reset',
		},

		initialize: function() {
		},

		reset : function(){
			Backbone.trigger('reset_view');
		}
		
	});
	
	return Navbar;
});
