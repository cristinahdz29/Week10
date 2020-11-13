import React, { Component } from "react";
import Cloud from "../Components/Cloud";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "../Styles/Login.css";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  //function that will send username and password to server/backend
  userLoggedIn = async (username, password) => {
    const user = await Axios.post("http://localhost:3001/login/user", {
      username: username,
      password: password,
    });
    return user.data;
  };
  //function that fires when user presses 'login' button
  handleLogin = async () => {
    let user = await this.userLoggedIn(
      this.state.username,
      this.state.password
    );
    if (user) {
      this.props.logUserIn(user);
      this.props.history.push("/content");
    }
  };

  //function will fire when input entered into textboxes
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    // add a post to login and will check if they are registered, then redirect them to the content page
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/content");
    }
  }

  render() {
    return (
      //   <div className="login-div">
      //     <input type="text" placeholder="username" name="username" />
      //     <input type="password" placeholder="password" name="password" />
      //     <button>Login</button>
      //   </div>
      <div className="login-div">
        <Form>
          <Cloud />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.handleLogin}>
            Login
          </Button>
          <Button
            variant="primary"
            onClick={() => this.props.history.push("/register")}
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
