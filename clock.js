
$(document).ready(function(){
	
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position)
    
     
  }

function position(pos){
	var lat = pos.coords.latitude;
	var lon = pos.coords.longitude;
	var timestamp = 1501963371
	var apiKey= "AIzaSyCctTlSMDr6INmO6vFA94TE9ytlaU0M6aE"
	/*setting visitor local time*/
	$.getJSON("https://maps.googleapis.com/maps/api/timezone/json?location=" + lat + "," + lon + "&timestamp=1501960293&key=" + apiKey, function(data){
		$.getJSON("https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=" + data.timeZoneId, function(time){
			function localTime(){
			var nd = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta'})
			$("#clock").text(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));





		}
		setInterval(localTime, 10000);
		localTime();
		})



	})

		

	





}












	/*function digitalclock()
{
  var elmnt=document.getElementById("clock");
  var timenow=new Date();

  elmnt.innerHTML=timenow.toLocaleTimeString();
}
window.onload=function()
{
  setInterval(digitalclock,1000)


  api + lat + "," + lon + "&timestamp=1501959481&key=" + apiKey
};*/
})
