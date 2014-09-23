MyApp.App = Backbone.View.extend({
	initialize : function(){
		this.sidebar = new MyApp.Views.SideBar();
		this.mainview = new MyApp.Views.MainView();
		this.navbar = new MyApp.Views.Navbar();
	}
});
new MyApp.App
