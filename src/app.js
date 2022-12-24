function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "59c311fa9a591a49217a726af72b661d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(url).then(displayTemperature);
