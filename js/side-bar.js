MyApp.Views.SideBar = Backbone.View.extend({
  
  el: "#sidebar",
  
  tmpl: _.template($("#sidebar_template").html()),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});