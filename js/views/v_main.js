MyApp.Views.MainView = Backbone.View.extend({
  
  el: "#mainview",
  
  initialize: function() {
    _.bindAll(this, 'print', 'render');
    
    Backbone.on('list_switch', this.print);
    Backbone.on('reset_view', this.render);
    
    this.register_view = new MyApp.Views.MainRegisterView();
    this.carlist_view = new MyApp.Views.CarListView();
    this.render();
  },
  
  render : function(){
  	this.$el.html(this.register_view.el);
  },
  
  print : function(id){
  	if(id == 0){
  		this.$el.html(this.register_view.el);
  	}else{
  		this.$el.html(this.carlist_view.el);
  	}
  },
  
  clicked : function(event){
      console.log('hello main' + $(event.currentTarget).data("id"));
  }

});