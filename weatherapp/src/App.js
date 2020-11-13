import React, { Component } from "react";
import Content from "./Components/Content";
import Favorites from "./Components/Favorites";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      search: "",
      favorites: [],
      User: { id: localStorage.getItem("UserId") },
      isUserLoggedIn: !!localStorage.getItem("UserId"),
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

  logUserIn = (user) => {
    localStorage.setItem("UserId", user.id);
    this.setState({
      isUserLoggedIn: true,
      User: user,
    });
  };

  logUserOut = () => {
    localStorage.clear();
    this.setState({
      isUserLoggedIn: false,
      User: { id: null },
    });
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
          isLoggedIn={this.state.isUserLoggedIn}
          logUserOut={this.logUserOut}
        />

        <Switch>
          <Route
            component={(props) => (
              <Login
                {...props}
                logUserIn={this.logUserIn}
                isLoggedIn={this.state.isUserLoggedIn}
              />
            )}
            path="/"
            exact
          ></Route>
          <Route
            component={(props) => (
              <Register {...props} logUserIn={this.logUserIn} />
            )}
            path="/register"
          ></Route>

          <Route
            component={(props) => (
              <Content
                {...props}
                weather={this.state.weather}
                cityName={this.state.cityName}
                isLoggedIn={this.state.isUserLoggedIn}
              />
            )}
            path="/content"
          />
          <Route
            component={(props) => (
              <Favorites
                {...props}
                userId={this.state.User.id}
                isLoggedIn={this.state.isUserLoggedIn}
              />
            )}
            path="/favorites"
          />
        </Switch>
      </div>
    );
  }
}

export default App;
