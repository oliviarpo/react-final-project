import React from "react";
import clear from "./images/clear.jpg";
import clouds from "./images/clouds.jpg";
import fog from "./images/rain.jpg";
import rain from "./images/snow.jpg";
import storm from "./images/storm.jpg";

// Add to weather.js
// import Background from "./Background";
// <Background description={weatherData.description} />

export default function Background(props) {
  const bgImage = ["", clear, clouds, fog, rain, storm];

  if (props.description === "clouds" || props.description.includes("cloud")) {
    this.setState({
      backgroundStyle: {
        backgroundImage: bgImage[1],
      },
    });
  } else {
    return null;
  }
}
