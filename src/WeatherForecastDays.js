import React, { useState } from "react";

import WeatherForecastDaysPreview from "./WeatherForecastDaysPreview";
import axios from "axios";

import "./WeatherForecastDays.css";

export default function WeatherForecastDays(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastDaysResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.latitude === forecast.lat &&
    props.longitude === forecast.lon
  ) {
    return (
      <span className="WeatherForecast row">
        {forecast.daily.slice(1, 5).map(function (forecastItem) {
          return (
            <WeatherForecastDaysPreview
              data={forecastItem}
              timezone={forecast.timezone_offset}
              key={forecastItem.dt}
            />
          );
        })}
      </span>
    );
  } else {
    let apiKey = "610edcec4f7131569ef97bf1470f78f8";
    let units = "metric";
    let excludeInfo = "current,minutely,hourly,alerts";
    let apiForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${excludeInfo}&appid=${apiKey}&units=${units}`;
    axios.get(apiForecastURL).then(handleForecastDaysResponse);

    return "null";
  }
}
