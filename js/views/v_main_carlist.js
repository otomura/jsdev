define(['jquery','underscore','backbone'],function($, _, Backbone){

	var CarListView =  Backbone.View.extend({

		tagName : 'div',

		tmpl: _.template($("#main_carlistview").html()),

		events : {
			"click #all_delete" : "all_delete"
		},

		initialize: function(cars) {
			this.collection = cars;
			this.collection.on('reset', this.render, this);
			this.collection.on('change', this.render, this);
			this.collection.on('destroy', this.render, this);
			this.render();
		},

		all_delete : function(){
			console.log('all_delete');
			console.log(this.collection.length);
			var model;
			while(model = this.collection.first()){
				model.destroy();
			}
		},

		render : function(){
			this.$el.html(this.tmpl());
			var that = this.$('#car_tbody');
			this.collection.each(function(model) {
				that.append(_.template($('#row_template').html(), model.attributes));
			});
		},

	});
	
	return CarListView;
	
});