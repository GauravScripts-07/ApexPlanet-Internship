// original URL 
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai&appid=f7af5d41420ef68fad318e56b7d63a1c

// writing the URI
let apiuri = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// key taken from the website
let key = "f7af5d41420ef68fad318e56b7d63a1c";

// putting everything in variable for manupulation
let background = document.querySelector(".main");
let input = document.querySelector("#search-box");
let search = document.querySelector("#search");
let temp = document.querySelector("#temp");
let cityLocation = document.querySelector(".city");
let humidity = document.querySelector("#humidity"); 
let feelsLike = document.querySelector("#Feels-like");
let weatherImg = document.querySelector("#weather-img");
let heroSec = document.querySelector(".hero")
let windSpeed = document.querySelector("#wind-speed");
let lastSec = document.querySelector(".last-sec");


// async function that takes city name as argument 
async function weather(city) {
  
  // fetching the details from API
  let response = await fetch(apiuri + city + `&appid=${key}`);
  
  //condition if something goes wrong in fetching
  if (response.status == 404) {
    alert("Invalid City name");
  } else {

    //converting response in json formate
    let data = await response.json();
    ///console.log(data);

    // putting values in html page through declared variable 
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityLocation.innerHTML = data.name;
    feelsLike.innerHTML = `Feels like ` + data.main.feels_like;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    console.log(data.weather[0].main);

    // setting up background image as per condtion 
    if (data.weather[0].main === "Rain") {
      console.log(data.weather[0].main);
      weatherImg.src = "rain.png";
    } else if (data.weather[0].main === "Clear") { 
      console.log(data.weather[0].main);
      weatherImg.src = "clear.png";
      background.style.backgroundImage = `url(clear-bg.jpg)`;
    } else if (data.weather[0].main === "Clouds") {
      console.log(data.weather[0].main);
      weatherImg.src = "clouds.png";
      background.style.backgroundImage = `url(clouds-bg.jpg)`;
    } else if (data.weather[0].main === "Drizzle") {
      console.log(data.weather[0].main);
      weatherImg.src = "drizzle.png";
      background.style.backgroundImage = `url(drizzle-bg.jpg)`;
    } else if (data.weather[0].main === "Mist") {
      console.log(data.weather[0].main);
      weatherImg.src = "mist.png";
      background.style.backgroundImage = `url(mist-bg.jpg)`;
    } else if (data.weather[0].main === "Snow") {
      console.log(data.weather[0].main);
      weatherImg.src = "snow.png";
      background.style.backgroundImage = `url(snow-bg.jpg)`;
    } else if (data.weather[0].main === "Haze") {
      console.log(data.weather[0].main);
      weatherImg.src = "drizzle.png";
      background.style.backgroundImage = `url(haze-bg.jpg)`;
      background.style.backgroundSize = `cover`;
    }
  }
}

// event listener to listen click event then calling the weather function
search.addEventListener("click", () => {
  console.log("Button clicked");
  let cityname = input.value;
  weather(cityname);
});