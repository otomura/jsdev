MyApp.Views.MainView = Backbone.View.extend({
  
  el: "#mainview",
  
  initialize: function() {
    _.bindAll(this, 'print', 'render');
    Backbone.on('list_switch', this.print);
    Backbone.on('reset_view', this.render);
    this.$tmpl1 = _.template($("#main_1").html());
    this.$tmpl2 = _.template($("#main_2").html());
    this.render();
  },
  
  render : function(){
  	this.$el.html(this.$tmpl1());
  },
  
  print : function(id){
  	console.log("とんできた " + id);
  	if(id == 0){
  		this.$el.html(this.$tmpl1());
  	}else{
  		this.$el.html(this.$tmpl2());
  	}
  },
  
  clicked : function(event){
      console.log('hello main' + $(event.currentTarget).data("id"));
  }

});