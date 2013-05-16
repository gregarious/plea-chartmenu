app.controller('ChartMenuController', function($scope, dataService) {
	var init = function() {
		$scope.state = 0;
	}

	var forward = function() {
		$scope.state++;
	}

	var backward = function() {
		$scope.state--;
	}

	init();
});
