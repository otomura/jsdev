MyApp.Views.MainView = Backbone.View.extend({

	el: "#mainview",

	initialize: function() {
		_.bindAll(this, 'switch_main', 'render');

		Backbone.on('sidebar:selected', this.switch_main);
		Backbone.on('reset_view', this.render);

		var cars = new MyApp.Collections.CarCollection();
		cars.fetch();
		console.log(cars);
		this.register_view = new MyApp.Views.MainRegisterView(cars);
		this.carlist_view = new MyApp.Views.CarListView(cars);
		this.render();
	},

	render : function(){
		this.$el.html(this.register_view.el);
	},

	switch_main : function(id){
		//console.log("id " + id);
		if(id == "register"){
			this.$el.html(this.register_view.el);
		}else
		if(id == "carlist"){
			this.$el.html(this.carlist_view.el);
		}else{
		this.$el.html("工事中");
		}
	}
});