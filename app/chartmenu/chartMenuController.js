app.controller('ChartMenuController', function($scope, dataService) {
	var init = function() {
		$scope.students = dataService.students;
		$scope.selectedStudent = null;

		$scope.selectStudent = function(student) {
			console.log('selected student ' + student.id);
			$scope.selectedStudent = student;
		};
		$scope.selectChart = function(chart) {
			console.log('selected chart ' + chart.id);
		};

		$scope.newChart = function(student) {
			console.log('new chart for ' + student.name);
			$scope.showDialog = true;
		};
	};

	init();
});