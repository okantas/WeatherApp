import React from "react";
import SunSVG from "../images/sun.svg";
import SearchSVG from "../images/search.svg";
import humidityImg from "../images/humidity.png";
import tempImg from "../images/temp.png";
import windImg from "../images/wind.png";
import visibilityImg from "../images/visibility.png";
import "./WeatherCard.css";

const WeatherCard = () => {
  let api_key = "755df23c7bd09458923dbf8286b1fc75";
  const search = async () => {
    const element = document.getElementsByClassName("input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const Visibility = document.getElementsByClassName("visibility");
    const FeelsLike = document.getElementsByClassName("feels-like");
    const Humidity = document.getElementsByClassName("humidity");
    const Wind = document.getElementsByClassName("wind");
    const Location = document.getElementsByClassName("location");
    const Temp = document.getElementsByClassName("degree");

    Visibility[0].innerHTML = data.visibility / 1000 + " Km";
    FeelsLike[0].innerHTML = Math.floor(data.main.feels_like) + "°C";
    Humidity[0].innerHTML = data.main.humidity + " %";
    Wind[0].innerHTML = data.wind.speed + " Km/h";
    Location[0].innerHTML = data.name;
    Temp[0].innerHTML = Math.floor(data.main.temp);
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
          <img className="sun-image" src={SunSVG} alt="sun" />
          <div className="location-and-date">
            <div className="location"> Eskişehir</div>
            <div className="date">Salı 21/11/2023</div>
          </div>
        </div>

        <div className="second-line">
          <div className="degree">15</div>
          <div className="type-of-degree">°C</div>
        </div>

        <div className="last-line">
          <div className="entity-container">
            <div className="entity">
              <img
                className="entity-img"
                src={visibilityImg}
                alt="visibility"
              />
              <h1 className="visibility">10</h1>
            </div>
            <p>Visibility</p>
          </div>
          <div className="entity-container">
            <div className="entity">
              <img className="entity-img" src={tempImg} alt="feels like" />
              <h1 className="feels-like">10</h1>
            </div>
            <p>Feels Like</p>
          </div>
          <div className="entity-container">
            <div className="entity">
              <img className="entity-img" src={humidityImg} alt="humidity" />
              <h1 className="humidity">10</h1>
            </div>
            <p>Humidity</p>
          </div>
          <div className="entity-container">
            <div className="entity">
              <img className="entity-img" src={windImg} alt="Wind" />
              <h1 className="wind">10</h1>
            </div>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </container>
  );
};
export default WeatherCard;
