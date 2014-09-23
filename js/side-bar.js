MyApp.Views.SideBar = Backbone.View.extend({
  
  el: "#sidebar",
  
  tmpl: _.template($("#sidebar_template").html()),

  events:{
  	'click li' : 'clicked',
  },
  
  initialize: function() {
    this.$el.html(this.tmpl());
  },
  
  clicked : function(event){
      $("li").removeClass("active");
      $(event.currentTarget).addClass("active");
      console.log($(event.currentTarget).index());
  }

  
});