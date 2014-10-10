MyApp.Views.CarListView = Backbone.View.extend({
  tagName : 'div',

  tmpl: _.template($("#main_carlistview").html()),

  initialize: function(cars) {
    this.collection = cars;
    this.collection.on('reset', this.render, this);
    this.collection.on('change', this.render, this);
    this.render();
  },
  
  render : function(){
    this.$el.html(this.tmpl());
    var that = this.$('#car_tbody');
    this.collection.each(function(model) {
       that.append(_.template($('#row_template').html(), model.attributes));
    });
  },
  
});