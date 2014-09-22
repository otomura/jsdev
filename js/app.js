MyApp.App = Backbone.View.extend({
	initialize : function(){
		this.sidebar = new MyApp.Views.SideBar();
	}
});
new MyApp.App
