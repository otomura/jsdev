define(['jquery','underscore','backbone', 'models/m_car'],function($, _, Backbone, Car){
	var CarCollection = Backbone.Collection.extend({
		model : Car,
		url : '/car_collections'
	});
	return CarCollection;
});