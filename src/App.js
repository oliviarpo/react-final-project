import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/oliviapovey/">Olivia Povey</a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/oliviarpo/react-final-project"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
