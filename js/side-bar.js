MyApp.Views.SideBar = Backbone.View.extend({
  
  el: "#sidebar",
  
  tmpl: _.template($("#sidebar_template").html()),

  events:{
  	'click' : 'clicked',
  },
  
  initialize: function() {
    this.$el.html(this.tmpl());
  },
  
  clicked : function(event){
      event.preventDefault();
      console.log('hello ' + $(event.currentTarget).data("id"));
  }

});