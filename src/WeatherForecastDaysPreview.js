import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaysPreview(props) {
  function getDay() {
    let unixTimestamp = props.data.dt;
    let timezoneOffset = props.timezone;
    let localUnixTimestamp = unixTimestamp + timezoneOffset;
    let date = new Date(localUnixTimestamp * 1000);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°C`;
  }

  return (
    <div className="col-sm-3">
      <div
        className="card"
        style={{ background: "rgba(255, 255, 255, 0.397)" }}
      >
        <div className="card-body">
          <p className="text-center">{getDay()}</p>
          <WeatherIcon code={props.data.weather[0].icon} />
          <p className="text-center">{temperature()}</p>
        </div>
      </div>
    </div>
  );
}
