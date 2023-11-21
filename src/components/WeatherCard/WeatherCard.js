import React, { Component } from "react";
import SunSVG from "../images/sun.svg";
import SearchSVG from "../images/search.svg";
import "./WeatherCard.css";
export default class WeatherCard extends Component {
  render() {
    return (
      <container className="card-container">
        <div className="card">
          <div className="search-section">
            <input className="input" type="text" placeholder="Enter The City" />
            <img className="search-image" src={SearchSVG} alt="search" />
          </div>

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
            <div className="top-part">
              <div className="visibility">Visibility: 10km</div>
              <div className="feels-like">Feels Like: 10km</div>
            </div>
            <div className="bottom-part">
              <div className="humidity">Humidity: 10km</div>
              <div className="wind">Wind: 10km</div>
            </div>
          </div>
        </div>
      </container>
    );
  }
}
