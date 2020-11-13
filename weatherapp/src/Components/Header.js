// responsible for displaying header content
import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class Header extends Component {

  logout = () => {
    this.props.logUserOut()
  }
    render () {
        return (
          <Navbar className="color-nav" variant="light">
            <Navbar.Brand href="#home">What's The Weather?</Navbar.Brand>
            {this.props.isLoggedIn ? (
              <>
                <Nav className="mr-auto">
                  <NavLink to="">Home</NavLink>
                  <NavLink to="/favorites">Favorites</NavLink> 
                </Nav>
                <Button variant="outline-primary" onClick={this.logout}>LogOut</Button>
                <Form inline>
                  <FormControl
                    type="text"
                    onChange={this.props.handleOnChange}
                    placeholder="Enter City"
                    className="mr-sm-2"
                  />
                  <Button
                    onClick={this.props.handleSearch}
                    variant="outline-primary"
                  >
                    Search
                  </Button>
                </Form>
              </>
            ) : (
              ""
            )}
          </Navbar>
        );
    }
}


export default Header