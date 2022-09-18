let weather = {
  apikey: "382c361ed8c6995eff240f823b01e24b",
  fetchWeather: function(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=382c361ed8c6995eff240f823b01e24b&lang=en`)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description, main } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    console.log(name, country, icon, description, main, temp, humidity, speed);
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".country").innerHTML = "Country: " + country;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerHTML = "Temperature: " + temp + "&deg;C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + "m/s";
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search_button").addEventListener("click", function() {
  weather.search();
});