//fetch weather API
var APIkey= "5477e904a3f4e46edfea78430b7e9ccf";
document.getElementById("buttonSearch").addEventListener("click", getAPI)
// console.log(moment)
var cityDate = document.getElementById("cityDate")
var temperature = document.getElementById("temp")
var wind = document.getElementById("wind")
var humidity = document.getElementById("humidity")
var uvIndex = document.getElementById("uv-index")

function getAPI() {
    var city = document.getElementById("searchBar").value;
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIkey;

    fetch(queryURL)
        .then(function  (response) {
            return response.json();
        })
            .then(function (data) {
                console.log(data)
                var onecallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data[0].lat + "&lon=" + data[0].lon + "&units=imperial" + "&appid=" + APIkey;
                fetch(onecallUrl).then(function(response) {
                    return response.json();
                }) .then(function (data) {
                    console.log(data)
                    temperature.innerText= "Current Temperature: " + data.current.temp
                    cityDate.innerText="Today's Date: " + moment.unix(data.current.dt).format("MMM Do YY")
                    wind.innerText="Current Wind Speed: " + data.current.wind_speed
                    humidity.innerText="Current Humidity: " + data.current.humidity
                    uvIndex.innerText="Current Uv-Index: " + data.current.uvi

                })
                // temp.innerText=data.main.temp
                   
                // cityDate.innerText=moment.unix(data.dt).format("MMM Do YY")

                // uvIndex
            })
}

//make api call  by user input to get lat & lon 
    //return that info to another api call to search by lat and lon
    //then write info on screen


//search for a city
    //return current weather condtion
    //return future weather condtion

//when viewing current weather condtions
    //return city name
    //reutrn the date
    //weather icon representation 
    //temperature
    //humidity
    //windspeed
    //uvindex
        //when view uvindex color background that is favorable, moderarte or severe

//when viewing future weather conditons 
  //5-day forecast
    //display date
    //display weather condition icon
    //display temperature
    //display wind speed
    //display humidity

//when I click on a city in search history I am again presented with 'current' and 'future' conditons
