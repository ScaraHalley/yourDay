//Feature 1 current date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${minutes}`;

//Feature 2 search form
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("#city");
  city.innerHTML = `Your day in ${searchInput.value}...`;
}
//Feature 3 geolocation and temperature

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${temperature}°C`;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let apiKey = "4996ce71fcc65dbc346e7914893b8e7f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
