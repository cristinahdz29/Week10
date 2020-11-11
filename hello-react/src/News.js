//component to display news

import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
    <div>{this.props.weather.temp}</div>
    );
  }
}


export default News;
