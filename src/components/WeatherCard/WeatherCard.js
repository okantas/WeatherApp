import React, { Component } from "react";
import SunSVG from "./sun.svg";
import "./WeatherCard.css";
export default class WeatherCard extends Component {
  render() {
    return (
      <container className="card-container">
        <div className="card">
          <div className="first-line">
            <img className="sun-image" src={SunSVG} alt="sun" />
            <div className="location-and-date">
              <div className="location">Tepebaşı, Eskişehir, TR</div>
              <div className="date">Salı 21/11/2023</div>
            </div>
          </div>

          <div className="second-line">
            <div className="degree">15</div>
            <div className="type-of-degree">°C</div>
          </div>

          <div className="last-line">
            <div className="left-part">
              <div className="visibility">Visibility: 10km</div>
              <div className="humidity">Humidity: 10km</div>
            </div>
            <div className="right-part">
              <div className="feels-like">Feels Like: 10km</div>
              <div className="wind">Wind: 10km</div>
            </div>
          </div>
        </div>
      </container>
    );
  }
}
