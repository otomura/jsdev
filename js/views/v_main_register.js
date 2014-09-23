MyApp.Views.MainRegisterView = Backbone.View.extend({
  tagName : 'div',
  
  tmpl: _.template($("#main_register").html()),

  initialize: function() {
    this.render();
  },
  
  render : function(){
  	this.$el.html(this.tmpl());
  },
  
});