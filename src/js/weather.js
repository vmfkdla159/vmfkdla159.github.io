const API_KEY = "6a45c3d32a79e870e8ab36c2434d3e12";

function onGeoDone(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".city");
      city.innerText = `${data.name}.`;
      const weather = document.querySelector(".weather");
      const weatherText = data.weather[0].main;
      weather.innerText = weatherText;
      const weatherImg = document.querySelector(".weather_img");
      if (weatherText == "Clear") {
        weatherImg.innerText = "☀";
      } else if (weatherText == "Clouds") {
        weatherImg.innerText = "☁";
      } else if (weatherText == "Rain") {
        weatherImg.innerText = "🌧";
      } else if (weatherText == "Snow") {
        weatherImg.innerText = "☃";
      } else if (weatherText == "Thunderstorm") {
        weatherImg.innerText = "🌩";
      } else if (weatherText == "Drizzle") {
        weatherImg.innerText = "🌦";
      } else if (weatherText == "Mist") {
        weatherImg.innerText = "🌫";
      }
      const temp = document.querySelector(".temp");
      temp.innerText = `. ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoDone, onGeoError);
