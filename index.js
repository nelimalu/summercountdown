var school = new Date(2022, 5, 30, 14, 55, 0);
var intervalID = window.setInterval(callback, 1);


function callback() {
	let now = new Date();

	let days_object = document.getElementById("days");
	let hours_object = document.getElementById("hours");
	let minutes_object = document.getElementById("minutes");
	let seconds_object = document.getElementById("seconds");
	let millis_object = document.getElementById("millis");

 	let time = school.getTime() - now.getTime();
	
 	let days = parseInt(time / 86400000);
 	let days_leftover = (time / 86400000) - days;
 	let hours = parseInt(days_leftover * 24);
 	let hours_leftover = (days_leftover * 24) - hours;
 	let minutes = parseInt(hours_leftover * 60);
 	let minutes_leftover = (hours_leftover * 60) - minutes;
 	let seconds = parseInt(minutes_leftover * 60);
 	let seconds_leftover = (minutes_leftover * 60) - seconds;
 	let millis = parseInt(seconds_leftover * 1000);

 	days_object.innerHTML = days.toString() + "<br>DAYS";
 	hours_object.innerHTML = hours.toString() + "<br>HRS";
 	minutes_object.innerHTML = minutes.toString() + "<br>MINS";
 	seconds_object.innerHTML = seconds.toString() + "<br>SECS";
 	millis_object.innerHTML = millis.toString() + "<br>MILLIS";
}

