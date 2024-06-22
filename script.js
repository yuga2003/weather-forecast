const apiKey = "e4fa8e36cca58262be109a583386e22b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-input");//This line used for the HTML input element where the user enters the city name.
const searchBtn = document.querySelector("#search-btn");//the user clicks to initiate the search
const weatherIcon = document.querySelector(".weather-icon");//This line selects the HTML image element that displays the weather icon.

async function checkWeather(city) {// for the OpenWeatherMap API to fetch weather data for city.
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    const data = await response.json();// logic to handle the weather data and update.
//async keyword is used to declare fetchData function as asynchronous.
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";//Displaying the Error Message
        document.querySelector(".weather").style.display = "none";// Hiding the Weather Information
    } else {
        document.querySelector(".city").innerText = data.name;//Updating City Name
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";//Updating Temperature
        document.querySelector(".humidity").innerText = data.main.humidity + "%";//Updating Humidity
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";//pdating Wind Speed

        if (data.weather[0].main === "Clouds") {//for Checking Clouds
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";
        }

        document.querySelector(".weather").style.display = "block";//Display the Weather Information
        document.querySelector(".error").style.display = "none";//Hide the Error Message
    }
}

searchBtn.addEventListener("click", () => {// for adding events in search icon
    checkWeather(searchBox.value);//Execute the checkWeather Function
});
