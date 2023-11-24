import React, { Component } from "react";
import CloudSvg from "../images/cloud.svg";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="left-part">
            <img className="cloud-svg" src={CloudSvg} alt="Cloud" />
            <div>WeatherApp by Okan</div>
          </div>
          <div className="right-part">
            <a
              rel="noreferrer"
              target="_blank"
              className="link"
              href="https://www.linkedin.com/in/okantas/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}
