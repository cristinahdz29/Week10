import React, { Component } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      search: "",
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

        <Navbar className="color-nav" variant="light">
          <Navbar.Brand href="#home">What's The Weather?</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Hourly</Nav.Link>
            <Nav.Link href="#features">10 Day</Nav.Link>
            <Nav.Link href="#pricing">Weekend</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              onChange={this.handleOnChange}
              placeholder="Enter City"
              className="mr-sm-2"
            />
            <Button onClick={this.handleSearch} variant="outline-primary">
              Search
            </Button>
          </Form>
        </Navbar>

        <Content weather={this.state.weather} cityName = {this.state.cityName} />
      </div>
    );
  }
}

export default App;
