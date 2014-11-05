define(['jquery','underscore','backbone', 'text!templates/main_carlistview.html', 'text!templates/carlistview_row.html'], 
	function($, _, Backbone, carListTemplate, carListRowTemplate){

	var CarListView =  Backbone.View.extend({

		tagName : 'div',

		tmpl: _.template(carListTemplate),

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
				that.append(_.template(carListRowTemplate, model.attributes));
			});
		},

	});
	
	return CarListView;
	
});