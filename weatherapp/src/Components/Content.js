//will display main weather content
import React, { Component } from "react";
import "../Styles/Content.css";
import Cloud from "./Cloud";

// Content Class
class Content extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
    }
  }
  round = (number) => Math.round(number);

  render() {
    const { weather, cityName } = this.props;

    const temp = this.round(weather.temp);
    const feels_like = this.round(weather.feels_like);
    const temp_min = this.round(weather.temp_min);
    const temp_max = this.round(weather.temp_max);

    return (
      <div className="content-div">
        <Cloud />
        <h1>The weather in {cityName || "your city"} today is...</h1>
        <p> Current temp: {temp || "N/A"} &deg;F </p>
        <p> Feels like: {feels_like || "N/A"} &deg;F </p>
        <p>Min temp: {temp_min || "N/A"} &deg;F </p>
        <p>Max temp: {temp_max || "N/A"} &deg;F</p>
        <p> Humidity: {this.props.weather.humidity || "N/A"}</p>
      </div>
    );
  }
}

export default Content;
