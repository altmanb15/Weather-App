function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatdata(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class=weather-aapp-icon />`;
}

function formatDaate(date) {
  let minutes = date.getMinutes();
  let houes = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[DataView.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days} ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "f5o451fb0d10a278db1ta3c93af21731";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefaualt();
  let seaarchInput = document.querySelector("#search-form-input");

  searchCity(seaarchInput.value);
}
let seaarchFormElement = document.querySelector("#search-form");
seaarchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
