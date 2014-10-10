MyApp.Views.MainRegisterView = Backbone.View.extend({
  tagName : 'div',
  
  tmpl: _.template($("#main_register").html()),

  events:{
    'click #register_submit' : 'addCar'
  },
  
  addCar : function(e) {
    e.preventDefault();
    var kind = $('#car-kind').val();
    var capacity = $('#car-capacity').val();
    this.collection.create({kind:kind, capacity:capacity});
    $('#car-kind').val("");
    $('#car-capacity').val("");
  },
  
  initialize: function(cars) {
    this.collection = cars;
    this.render();
  },
  
  render : function(){
    this.$el.html(this.tmpl());
  },
  
});