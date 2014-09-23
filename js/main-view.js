MyApp.Views.MainView = Backbone.View.extend({
  
  el: "#main",
  
  tmpl: _.template($("#main_template").html()),

  events:{
  	'click #menu2' : 'clicked',
  },
  
  initialize: function() {
    this.$el.html(this.tmpl());
  },
  
  clicked : function(event){
      console.log('hello main' + $(event.currentTarget).data("id"));
  }

});