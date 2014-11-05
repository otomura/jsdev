require.config({
	paths : {
        'jquery' : 'lib/jquery-1.11.1.min',
        'bootstrap' :  'lib/bootstrap.min',
        'underscore' : 'lib/underscore-min',
        'backbone' : 'lib/backbone',
    },
	shim : {
        'bootstrap' : { deps : 'jquery' },
        'underscore' : { exports : '_' },
        'backbone' : { deps : ['jquery', 'underscore'], exports : 'Backbone' },
    },
});

require(['views/v_main', 'views/v_sidebar', 'views/v_navbar'], function(SideBar, MainView, Navbar){
	var app = Backbone.View.extend({
		initialize : function(){
			this.sidebar = new SideBar();
			this.mainview = new MainView();
			this.navbar = new Navbar();
		}
	});
	new app();
});

