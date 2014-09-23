MyApp.Views.CarListView = Backbone.View.extend({
  tagName : 'div',
  
  tmpl: _.template($("#main_carlistview").html()),

  initialize: function() {
    this.render();
  },
  
  render : function(){
  	this.$el.html(this.tmpl());
  },
  
});