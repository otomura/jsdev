define(['jquery','underscore','backbone', 'text!templates/sidebar.html'],function($, _, Backbone, sideBarTemplate){

	var SideBar =  Backbone.View.extend({

		el: "#sidebar",

		tmpl: _.template(sideBarTemplate),

		events:{
			'click li' : 'clicked',
		},

		initialize: function() {
			_.bindAll(this,'render');
			Backbone.on('reset_view', this.render);
			this.render();
		},

		render : function(){
			this.$el.html(this.tmpl());
		},

		clicked : function(event){
			$("li").removeClass("active");
			$(event.currentTarget).addClass("active");
			selected = $(event.currentTarget).find("a").data("id");
			Backbone.trigger('sidebar:selected', selected);
		}
	});

	return SideBar;
	
});