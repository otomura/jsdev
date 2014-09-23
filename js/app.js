MyApp.App = Backbone.View.extend({
	initialize : function(){
		this.sidebar = new MyApp.Views.SideBar();
		this.mainview = new MyApp.Views.MainView();
	}
});
new MyApp.App
