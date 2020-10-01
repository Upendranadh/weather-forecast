//Complete the Weather API Backend part using openweathermap api
const apiKey = "67eb7aedb373659ed71ef9cb8927b9e3";

//Dom elements
const search = document.getElementById("search-box");
const cityElement = document.getElementById("city");
const tempElement = document.getElementById("temp");
const clouds = document.getElementById("clouds");

search.addEventListener("keyup", (event) => {
  let city;
  if (event.key === "Enter") {
    city = event.target.value;
  }
  if (city)
    fetch(
      `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((data) => {
        console.log(data);
        cityElement.textContent = `${data.name}, IN`;
        tempElement.textContent = (data.main.temp - 273.15).toFixed(2) + "°c";
        clouds.textContent = data.main.temp + 2 - 273.15 + "°c";
      })
      .catch((error) => {
        console.log(error.message);
      });
});
