
// For Looping Month Name
var month 	= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
month.forEach(function(month) {
	options += "<option>"+ month +"</option>";
});
document.getElementById("month").innerHTML = options;


// For looping Day
var day = 1;
var till = 31;
var options = "";
for(var d=day; d<=till; d++){
  options += "<option>"+ d +"</option>";
}
document.getElementById("day").innerHTML = options;

// for lopping Year
var d = new Date();
var year = d.getFullYear();
var till = 1990;
var options = "";
for(var y=year; y>=till; y--){
  options += "<option>"+ y +"</option>";
}
document.getElementById("year").innerHTML = options;
document.getElementById("copyright_year").innerHTML = year;