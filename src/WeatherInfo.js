import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="date">
          <FormattedDate date={props.data.date} />
        </li>
        <span className="description">
          <li className="text-capitalize">{props.data.description}</li>
        </span>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="icon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="temp">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="details">
          <table className="table">
            <tbody>
              <tr>
                <td>Feels Like</td>
                <td>{Math.round(props.data.feels)}°C</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{props.data.humidity}%</td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>{Math.round(props.data.wind / 1.609)} mph</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
