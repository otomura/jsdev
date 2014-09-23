MyApp.App = Backbone.View.extend({
	initialize : function(){
	    
	    //Mediator�I�u�W�F�N�g�쐬
    	MyApp.mediator = {};
    	_.extend(MyApp.mediator, Backbone.Events);
    	
		this.sidebar = new MyApp.Views.SideBar();
		this.mainview = new MyApp.Views.MainView();
	}
});
new MyApp.App
