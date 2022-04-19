//fetch weather API
var APIkey= "5477e904a3f4e46edfea78430b7e9ccf";
document.getElementById("buttonSearch").addEventListener("click", getAPI)
// console.log(moment)
var cityDate = document.getElementById("cityDate")
var temperature = document.getElementById("temp")
var wind = document.getElementById("wind")
var humidity = document.getElementById("humidity")
var uvIndex = document.getElementById("uv-index")

var fiveDay1header = document.getElementById("header1")
var fiveDay1Icon = document.getElementById("weatherIcon1")
var fiveDay1Temp = document.getElementById("temp1")
var fiveDay1Wind = document.getElementById("wind1")
var fiveDay1Humidity = document.getElementById("humidity1")

var fiveDay2header = document.getElementById("header2")
var fiveDay2Icon = document.getElementById("weatherIcon2")
var fiveDay2Temp = document.getElementById("temp2")
var fiveDay2Wind = document.getElementById("wind2")
var fiveDay2Humidity = document.getElementById("humidity2")

var fiveDay3header = document.getElementById("header3")
var fiveDay3Icon = document.getElementById("weatherIcon3")
var fiveDay3Temp = document.getElementById("temp3")
var fiveDay3Wind = document.getElementById("wind3")
var fiveDay3Humidity = document.getElementById("humidity3")

var fiveDay4header = document.getElementById("header4")
var fiveDay4Icon = document.getElementById("weatherIcon4")
var fiveDay4Temp = document.getElementById("temp4")
var fiveDay4Wind = document.getElementById("wind4")
var fiveDay4Humidity = document.getElementById("humidity4")

var fiveDay5header = document.getElementById("header5")
var fiveDay5Icon = document.getElementById("weatherIcon5")
var fiveDay5Temp = document.getElementById("temp5")
var fiveDay5Wind = document.getElementById("wind5")
var fiveDay5Humidity = document.getElementById("humidity5")

var currentIconImg = document.getElementById("currentIcon")



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
                    temperature.innerText= "  Current Temperature: " + data.current.temp + " F";
                    cityDate.innerText="  Today's Date: " + moment.unix(data.current.dt).format("MMM Do YY");
                    wind.innerText="  Current Wind Speed: " + data.current.wind_speed + " mph";
                    humidity.innerText="  Current Humidity: " + data.current.humidity + " %";
                    uvIndex.innerText="  Current Uv-Index: " + data.current.uvi;

                    fiveDay1header.innerText= moment.unix(data.daily[1].dt).format("MMM Do YY");
                    fiveDay1Temp.innerText= "Temp:   " + data.daily[1].temp.day + " F";
                    fiveDay1Wind.innerText= "WS:   " + data.daily[1].wind_speed + " mph";
                    fiveDay1Humidity.innerText= "HMD:   " + data.daily[1].humidity + " %" ;

                    fiveDay2header.innerText= moment.unix(data.daily[2].dt).format("MMM Do YY");
                    fiveDay2Temp.innerText= "Temp:   " + data.daily[2].temp.day + " F";
                    fiveDay2Wind.innerText= "WS:   " + data.daily[2].wind_speed + " mph";
                    fiveDay2Humidity.innerText= "HMD:   " + data.daily[2].humidity + " %"; 

                    fiveDay3header.innerText= moment.unix(data.daily[3].dt).format("MMM Do YY");
                    fiveDay3Temp.innerText= "Temp:   " + data.daily[3].temp.day + " F";
                    fiveDay3Wind.innerText= "WS:   " + data.daily[3].wind_speed + " mph";
                    fiveDay3Humidity.innerText= "HMD:   " + data.daily[3].humidity + " %"; 

                    fiveDay4header.innerText= moment.unix(data.daily[4].dt).format("MMM Do YY")
                    fiveDay4Temp.innerText= "Temp:   " + data.daily[4].temp.day + " F";
                    fiveDay4Wind.innerText= "WS:   " + data.daily[4].wind_speed + " mph";
                    fiveDay4Humidity.innerText= "HMD:   " + data.daily[4].humidity + " %";

                    fiveDay5header.innerText= moment.unix(data.daily[5].dt).format("MMM Do YY")
                    fiveDay5Temp.innerText= "Temp:   " + data.daily[5].temp.day + " F";
                    fiveDay5Wind.innerText= "WS:   " + data.daily[5].wind_speed + " mph";
                    fiveDay5Humidity.innerText= "HMD:   " + data.daily[5].humidity + " %";

                    var currentIcon = data.daily[0].weather[0].icon
                    var icon1 = data.daily[1].weather[0].icon
                    var icon2 = data.daily[2].weather[0].icon
                    var icon3 = data.daily[3].weather[0].icon
                    var icon4 = data.daily[4].weather[0].icon
                    var icon5 = data.daily[5].weather[0].icon

                    var urlCurrent ="http://openweathermap.org/img/wn/" + currentIcon + "@2x.png" 
                    var url1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png" 
                    var url2 = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png"
                    var url3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png"
                    var url4 = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png"
                    var url5 = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png"

                    currentIconImg.src = urlCurrent
                    fiveDay1Icon.src = url1
                    fiveDay2Icon.src = url2
                    fiveDay3Icon.src = url3
                    fiveDay4Icon.src = url4
                    fiveDay5Icon.src = url5
                    

                    if (condition) {
                        
                    }

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
