MyApp.Views.MainView = Backbone.View.extend({
  
  el: "#mainview",
  
  tmpl: _.template($("#main_template").html()),
  
  initialize: function() {
    //this.$el.html("<h1>hogeeeeeeeeeeeeeeeeeeeeeeee</h1>");
    _.bindAll(this, 'print', 'render');
    MyApp.mediator.on('list_switch', this.print);
    MyApp.mediator.on('reset', this.render);
    this.render();
  },
  
  render : function(){
  	console.log("とんできたrender");
  	this.$el.html(this.tmpl());
  },
  
  print : function(id){
  	console.log("とんできた " + id);
  	this.$el.html("<h1>とんできた " + id + "</h1>");
  },
  
  clicked : function(event){
      console.log('hello main' + $(event.currentTarget).data("id"));
  }

});