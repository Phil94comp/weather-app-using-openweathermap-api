var cityInput = document.getElementById("searchCity");

var backgroundsList = [
  "day1.jpg",
  "day2.jpg",
  "day3.jpg",
  "day4.jpg",
  "day5.jpg",
  "night1.jpg",
  "night2.jpg",
  "night3.jpg",
  "night4.jpg",
  "night5.jpg",
  "cloudy1.jpg",
  "cloudy2.jpg",
  "cloudy3.jpg",
  "cloudy4.jpg",
  "cloudy5.jpg",
  "rainy1.jpg",
  "rainy2.jpg",
  "rainy3.jpg",
  "rainy4.jpg",
  "rainy5.jpg",
];

var randomBackground = backgroundsList[Math.floor(Math.random() * backgroundsList.length)];

document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url('media/" + randomBackground + "')";

cityInput.addEventListener("keyup", function(event)
{
  if(event.key === "Enter")
  {
    var cityInputValue = cityInput.value;

    var apiKey = "b1fd6e14799699504191b6bdbcadfc35"; // Default
    var unit = "metric";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&appid=${apiKey}&units=${unit}`;

    if(cityInputValue != "")
    {
      async function getWeather()
      {
        var response = await fetch(apiUrl);
        var data = await response.json();

        if(data.message != "city not found" && data.cod != "404")
        {
          var location = data.name;
          var temperature = data.main.temp;
          var weatherType = data.weather[0].description;
          var realFeel = data.main.feels_like;
          var windSpeed = data.wind.speed;
          var windDirection = data.wind.deg;
          var visibility = data.visibility / 1000;
          var pressure = data.main.pressure;
          var maxTemperature = data.main.temp_max;
          var minTemperature = data.main.temp_min;
          var humidity = data.main.humidity;
          var sunrise = data.sys.sunrise;
          var sunset = data.sys.sunset;
        
          document.getElementById("locationName").innerHTML = location;
          document.getElementById("temperatureValue").innerHTML = temperature + "<sup>o</sup>C";
          document.getElementById("weatherType").innerHTML = weatherType;
          document.getElementById("realFeelAdditionalValue").innerHTML = realFeel + "<sup>o</sup>C";
          document.getElementById("windSpeedAdditionalValue").innerHTML = windSpeed + " km/h";
          document.getElementById("windDirectionAdditionalValue").innerHTML = windDirection;
          document.getElementById("visibilityAdditionalValue").innerHTML = visibility + " km";
          document.getElementById("pressureAdditionalValue").innerHTML = pressure;
          document.getElementById("maxTemperatureAdditionalValue").innerHTML = maxTemperature + "<sup>o</sup>C";
          document.getElementById("minTemperatureAdditionalValue").innerHTML = minTemperature + "<sup>o</sup>C";
          document.getElementById("humidityAdditionalValue").innerHTML = humidity;
          document.getElementById("sunriseAdditionalValue").innerHTML = sunrise;
          document.getElementById("sunsetAdditionalValue").innerHTML = sunset;
        }
        else document.getElementById("locationName").innerHTML = "City not found";
      }

      getWeather();
    }
    else document.getElementById("locationName").innerHTML = "Enter a city name...";
  }
});