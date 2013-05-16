var app = angular.module('app', ['$strap.directives']).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/menu', {
			templateUrl: 'app/chartmenu/chartMenu.tpl.html',
			controller: 'ChartMenuController'
		}).
		otherwise({
			redirectTo: '/menu'
		});
}]);

Backbone.sync = function Sync() {
	console.log('syncing remotely');
	Backbone.ajaxSync.apply(this, arguments);
	console.log('syncing locally');
	return Backbone.localSync.apply(this, arguments);
};
