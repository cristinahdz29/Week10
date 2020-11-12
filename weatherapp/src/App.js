import React, { Component } from "react";
import Content from "./Components/Content";
import Favorites from "./Components/Favorites";
import Header from "./Components/Header";
import axios from "axios";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      search: "",
      favorites: [],
    };
  }

  //fetching weather from the api (will need to add an input box so user can find weather based on city)
  //making own function to fetch weather
  // fetchWeather = async () => {
  //   const resp = await axios.get(
  //     "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=ae3786eeaa638d67261624410e4e8689"
  //   );

  //function to search for weather by city
  searchWeatherByCity = async (city) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ae3786eeaa638d67261624410e4e8689`
    );

    this.setState({
      weather: data.main,
      cityName: data.name,
    });
  };

  createFavorite = async (city) => {
    const { data } = await axios.post(`http://localhost:3001/favorites`, {
      City: city,
    });
    console.log(data);
  };

  handleOnChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSearch = () => {
    this.searchWeatherByCity(this.state.search);
  };

  componentDidMount() {
    //this.fetchWeather();
  }

  render() {
    return (
      <div>
        {/* NAVBAR BOOTSTRAP */}

        <Header
          handleOnChange={this.handleOnChange}
          handleSearch={this.handleSearch}
        />

        <Route
          component={() => (
            <Content
              weather={this.state.weather}
              cityName={this.state.cityName}
            />
          )}
          path="/"
          exact
        />
        <Route component={Favorites} path="/favorites" />
      </div>
    );
  }
}

export default App;
