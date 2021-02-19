import React, { useState } from "react";

import WeatherForecastHoursPreview from "./WeatherForecastHoursPreview";
import axios from "axios";
import "./WeatherForecastHours.css";

export default function WeatherForecastHours(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastHoursResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecastHours">
        <div className="row">
          <WeatherForecastHoursPreview data={forecast.list[0]} />
          <WeatherForecastHoursPreview data={forecast.list[1]} />
          <WeatherForecastHoursPreview data={forecast.list[2]} />
          <WeatherForecastHoursPreview data={forecast.list[3]} />
          <WeatherForecastHoursPreview data={forecast.list[4]} />
          <WeatherForecastHoursPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "610edcec4f7131569ef97bf1470f78f8";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastHoursResponse);

    return props.city;
  }
}
