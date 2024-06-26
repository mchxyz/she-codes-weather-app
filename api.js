import axios from 'axios';

function displayTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    console.log(response);
    let city = response.data.city;
    let country = response.data.country;
    let description = response.data.condition.description;

let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = `The temperature in ${city}, ${country} is ${temperature}`;
}

let city = "Paris";
let apiKey = "aob6b1bc95bbcf3taf0ee93f974adfb4";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
