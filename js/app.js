MyApp.App = Backbone.View.extend({
	initialize : function(){
	    
	    //Mediatorオブジェクト作成
    	MyApp.mediator = {};
    	_.extend(MyApp.mediator, Backbone.Events);
    	
		this.sidebar = new MyApp.Views.SideBar();
		this.mainview = new MyApp.Views.MainView();
		this.navbar = new MyApp.Views.Navbar();
	}
});
new MyApp.App
