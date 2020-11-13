import Axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      cities: [],
      cityWeather: [],
      newCityValue: "",
    };
  }

  getCityWeather = async () => {
    const promises = this.state.cities.map((city) => {
      return Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=imperial&appid=ae3786eeaa638d67261624410e4e8689`
      );
    });
    console.log(promises);
    const cityWeather = await Promise.all(promises);
    console.log(cityWeather);
    this.setState({
      cityWeather: cityWeather,
    });
  };

  viewFavorites = async () => {
    const { data } = await Axios.get(
      `http://localhost:3001/users/${this.props.userId}/favorites`
    );
    console.log(data);
    this.setState({
      cities: data,
    });
    await this.getCityWeather();
  };

  createFavorite = async (city) => {
    await Axios.post(`http://localhost:3001/users/${this.props.userId}/favorites`, {
      city: city,
    });
  };

  handleSave = async () => {
    await this.createFavorite(this.state.newCityValue);
    await this.viewFavorites();
    this.setState({ newCityValue: "" });
  };

  //gets value of textbox
  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({
      newCityValue: e.target.value,
    });
  };

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
    } else {
      this.viewFavorites();
    }
  }

  render() {
    const cityItems = this.state.cityWeather.map((city) => {
      return (
        <li key={city.data.id}>
          {city.data.name} {city.data.main.temp}
        </li>
      );
    });
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            value={this.state.newCityValue}
            onChange={this.handleOnChange}
            placeholder="Enter City"
            className="mr-sm-2"
          />
          <Button onClick={this.handleSave} variant="outline-primary">
            Add to Favorites
          </Button>
        </Form>
        <br></br>
        <ul>{cityItems}</ul>
      </div>
    );
  }
}

export default Favorites;
