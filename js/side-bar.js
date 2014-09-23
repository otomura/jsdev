MyApp.Views.SideBar = Backbone.View.extend({
  
  el: "#sidebar",
  
  tmpl: _.template($("#sidebar_template").html()),

  events:{
  	'click li' : 'clicked',
  },
  
  initialize: function() {
  	_.bindAll(this,'render');
    MyApp.mediator.on('reset', this.render);
    this.render();
  },
  
  render : function(){
  	this.$el.html(this.tmpl());
  },
  
  clicked : function(event){
      $("li").removeClass("active");
      $(event.currentTarget).addClass("active");
      console.log($(event.currentTarget).index());
      MyApp.mediator.trigger('list_switch', $(event.currentTarget).index());
  }

  
});