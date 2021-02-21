import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecastHours from "./WeatherForecastHours";
import WeatherForecastDays from "./WeatherForecastDays";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      city: response.data.name,
      timezone: response.data.timezone,
      date: new Date(response.data.dt * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function search() {
    const apiKey = "610edcec4f7131569ef97bf1470f78f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  aria-label="Type a city..."
                  aria-describedby="basic-addon2"
                  autoFocus="on"
                  onChange={handleCityChange}
                />

                <div className="col-3">
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">
                      <i className="fas fa-search-location"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecastHours city={weatherData.city} />
        <hr />
        <WeatherForecastDays
          city={weatherData.city}
          latitude={weatherData.lat}
          longitude={weatherData.lon}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
