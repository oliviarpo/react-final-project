import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaysPreview(props) {
  function getDay() {
    let unixTimestamp = props.data.dt;
    let timezoneOffset = props.timezone;
    let localUnixTimestamp = unixTimestamp + timezoneOffset;
    let date = new Date(localUnixTimestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°C`;
  }

  return (
    <div className="WeatherPreview col">
      <p className="text-center">{getDay()}</p>
      <WeatherIcon code={props.data.weather[0].icon} />
      <p className="text-center">{temperature()}</p>
    </div>
  );
}
