var boxes = $('.boxcontent');
    var h1 = $('h1');
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily",                                      {
        APPID: "841738b63489bc8b86b86531ec928213",
        q:     "San Antonio, TX",
        cnt: 3,
        units: "imperial"
    }).done(function(data){
        console.log(data);
        var days = data.list;
        console.log(days);
        $(h1).html(data.city.name);
        for(i = 0; i < data.list.length; i++){
            var day = days[i];
            var daytemps = day.temp;
            var dayweather = day.weather[0].main;
            var weathericon = day.weather[0].icon;
            $(boxes[i]).append("<p>High: " + daytemps.max + "</p>");
            $(boxes[i]).append("<p>Low: " + daytemps.min + "</p>");
            $(boxes[i]).append("<img src='http://openweathermap.org/img/w/" + weathericon + ".png'>");
            $(boxes[i]).append("<p>Weather: " + dayweather + "</p>");
            console.log(day);
            console.log(daytemps.max);
        }
    });
    var mapOptions = {
        // Set the zoom level
        zoom: 10,
       
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };
    // Render the map
                    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
                        var marker = new google.maps.Marker({
            draggable: true,
            position: mapOptions.center,
            map: map,
            title: "San Antonio, TX"
        });
    google.maps.event.addListener(marker, 'dragend', function(event) {
        document.getElementById("lat").value = event.latLng.lat();
        document.getElementById("lon").value = event.latLng.lng();
        var latitude = parseFloat($('#lat').val());
        var longitude = parseFloat($('#lon').val());
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "841738b63489bc8b86b86531ec928213",
            lat: latitude,
            lon: longitude,
            cnt: 3,
            units: "imperial"
        }).done(function(data){
            console.log(data);
            var days = data.list;
            console.log(days);
            $(h1).html(data.city.name);
            $(boxes).html('');
            for(i = 0; i < data.list.length; i++){
                var day = days[i];
                var daytemps = day.temp;
                var dayweather = day.weather[0].main;
                var weathericon = day.weather[0].icon;
                console.log(weathericon);
                $(boxes[i]).append("<p>High: " + daytemps.max + "</p>");
                $(boxes[i]).append("<p>Low: " + daytemps.min + "</p>");
                $(boxes[i]).append("<img src='http://openweathermap.org/img/w/" + weathericon + ".png'>");
                $(boxes[i]).append("<p>Weather: " + dayweather + "</p>");
                console.log(day);
                console.log(daytemps.max);
            }
        })
    });