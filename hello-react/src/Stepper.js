import React, { Component } from 'react'

class Stepper extends Component {
  
    constructor() {
    super();

    this.state = {
      stepper: 99,
    };
  }

  handleDecrement = () => {
      this.setState({
          stepper: this.state.stepper - 1
      })
  }

  handleIncrement = () => {
      this.setState({
          stepper:this.state.stepper + 1
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <label>{this.state.stepper}</label>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Stepper