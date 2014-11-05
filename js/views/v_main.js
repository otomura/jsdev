define(['jquery','underscore','backbone', 'collections/c_car_collection','views/v_main_register', 'views/v_main_carlist'],
function($, _, Backbone, CarCollection, MainRegisterView, CarListView){
	var MainView = Backbone.View.extend({

		el: "#mainview",

		initialize: function() {
			_.bindAll(this, 'switch_main', 'render');

			Backbone.on('sidebar:selected', this.switch_main);
			Backbone.on('reset_view', this.render);

			var cars = new CarCollection();
			this.register_view = new MainRegisterView(cars);
			this.carlist_view = new CarListView(cars);
			cars.fetch({reset:true});
			this.render();
		},

		render : function(){
			this.$el.html(this.register_view.el);
		},

		switch_main : function(id){
			if(id == "register"){
				this.$el.html(this.register_view.el);
				this.register_view.delegateEvents();
			}else
			if(id == "carlist"){
				this.$el.html(this.carlist_view.el);
				this.carlist_view.delegateEvents();
			}else{
				this.$el.html("工事中");
			}
		}
	});
	return MainView;
});
