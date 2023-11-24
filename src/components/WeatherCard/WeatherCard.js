import React, { useState } from "react";
import SunSVG from "../images/sun.svg";
import ThunderSVG from "../images/thunder.svg";
import RainySVG from "../images/rainy.svg";
import CloudSVG from "../images/cloud.svg";
import DrizzleSVG from "../images/drizzle.svg";
import SearchSVG from "../images/search.svg";
import humidityImg from "../images/humidity.png";
import tempImg from "../images/temp.png";
import windImg from "../images/wind.png";

import "./WeatherCard.css";

const WeatherCard = () => {
  let api_key = "755df23c7bd09458923dbf8286b1fc75";

  const [weatherIcon, setWeatherIcon] = useState(CloudSVG);

  const search = async () => {
    const element = document.getElementsByClassName("input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const FeelsLike = document.getElementsByClassName("feels-like");
    const Humidity = document.getElementsByClassName("humidity");
    const Wind = document.getElementsByClassName("wind");
    const Location = document.getElementsByClassName("location");
    const Definition = document.getElementsByClassName("definition");
    const Temp = document.getElementsByClassName("degree");

    FeelsLike[0].innerHTML = Math.floor(data.main.feels_like) + "°C";
    Humidity[0].innerHTML = data.main.humidity + " %";
    Wind[0].innerHTML = data.wind.speed;
    Location[0].innerHTML = data.name;
    Definition[0].innerHTML = data.weather[0].description;
    Temp[0].innerHTML = Math.floor(data.main.temp);

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(SunSVG);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(CloudSVG);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(DrizzleSVG);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(DrizzleSVG);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(DrizzleSVG);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(RainySVG);
    } else if (
      data.weather[0].icon === "11d" ||
      data.weather[0].icon === "11n"
    ) {
      setWeatherIcon(ThunderSVG);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(ThunderSVG);
    }
  };

  return (
    <container className="card-container">
      <div className="card">
        <div className="search-section">
          <input className="input" type="text" placeholder="Enter The City" />
          <img
            className="search-image"
            src={SearchSVG}
            alt="search"
            onClick={() => {
              search();
            }}
          />
        </div>

        <div className="first-line">
          <img className="sun-image" src={weatherIcon} alt="sun" />
          <div className="location-and-date">
            <div className="location"> Default</div>
            <div className="definition"> -Default-</div>
          </div>
        </div>

        <div className="second-line">
          <div className="degree">0</div>
          <div className="type-of-degree">°C</div>
        </div>

        <div className="last-line">
          <div className="entity-container">
            <div className="entity">
              <img className="entity-img" src={tempImg} alt="feels like" />
              <h1 className="feels-like">0</h1>
            </div>
            <p>Feels Like</p>
          </div>
          |
          <div className="entity-container">
            <div className="entity">
              <img className="entity-img" src={humidityImg} alt="humidity" />
              <h1 className="humidity">0</h1>
            </div>
            <p>Humidity</p>
          </div>
          |
          <div className="entity-container">
            <div className="entity">
              <img className="entity-img" src={windImg} alt="Wind" />
              <h1 className="wind">0</h1>
            </div>
            <p>Wind(Km/h)</p>
          </div>
        </div>
      </div>
    </container>
  );
};
export default WeatherCard;
