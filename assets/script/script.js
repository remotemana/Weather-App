//fetch weather API
var APIkey= "5477e904a3f4e46edfea78430b7e9ccf";
var city;
fetch(queryURL)

function getAPI() {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + "seattle" + "&appid=" + APIkey;

    fetch(queryURL)
        .then(function  (response) {
            return response.json();
        })
}

getAPI()
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
