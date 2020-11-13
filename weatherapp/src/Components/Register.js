import React, { Component } from "react";
import Cloud from "../Components/Cloud";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../Styles/Register.css";
import Axios from "axios";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // function to create user in db
    // passing in the username and
    // password as arguments that will
    // come from the state
    // will be called in the handleSave function
    createUser = async (username, password) => {
        const user = await Axios.post("http://localhost:3001/register/user", {
            username: username,
            password: password
        });
        return user.data
    }

    // function that will be called when
    // save button is clicked

    handleSave = async () => {
        let savedUser = await this.createUser(this.state.username, this.state.password);
        console.log(savedUser)
        if (savedUser) {
            this.props.logUserIn(savedUser)
            this.props.history.push('/content')
        }
    }

  render() {
    return (
      //   <div className="login-div">
      //     <input type="text" placeholder="username" name="username" />
      //     <input type="password" placeholder="password" name="password" />
      //     <button>Login</button>
      //   </div>
      <div className="register-div">
        <Form>
          <Cloud />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={this.handleOnChange}
              name='username'
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleOnChange}
              name='password'
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSave}>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
