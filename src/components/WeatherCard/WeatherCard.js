import React, { Component } from "react";
import SunSVG from "./sun.svg";
import "./WeatherCard.css";
export default class WeatherCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="first-line">
            <img className="sun-image" src={SunSVG} alt="sun image" />
            <div className="location-and-date">
              <div className="location">Tepebaşı, Eskişehir, TR</div>
              <div className="date">21/11/2023</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
