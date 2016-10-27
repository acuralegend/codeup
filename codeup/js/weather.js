
$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "841738b63489bc8b86b86531ec928213",
    q:     "San Antonio, TX",
    units: "imperial"

}).done(function(data) {
    console.log(data);
    $('#weather').html('the forecast is: ' + data.list["0"].deg);
});



$(document).ready(function(){
   $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=841738b63489bc8b86b86531ec928213&q=SAN%20ANTONIO,TX", function(data){
   console.log(data.list[0]);
   });
});
