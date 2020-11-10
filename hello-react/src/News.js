//component to display news

import React, { Component } from 'react';

class News extends Component {
  render() {
    const newsItems = this.props.news.map((article, index) => {
      return (
        <li key={index}>
          <b>{article.title}</b>
          <p>{article.description}</p>
        </li>
      );
    });
    return (
    <ul>{newsItems}</ul>
    );
  }
}


export default News;
