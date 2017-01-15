var app = angular.module("cod", []);

app.controller('homeController', function($scope) {
    
});

var clock;
$(document).ready(function() {
	var currentDate = new Date();
	var futureDate  = new Date('May 18 2017 13:00:00 GMT+0530');
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	clock = $('.timer').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});
});
