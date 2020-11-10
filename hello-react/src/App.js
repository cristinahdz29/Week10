//main file that is plugged into the 'root div'
import React, { Component } from 'react'
import Name from './Name'
import Friends from './Friends'
import Stepper from './Stepper'
import News from './News'

class App extends Component {
  //render function dictates what the component will display on the screen
  // MUST have a component section that returns something!

  constructor () {
    super ()

    this.state = {
      news: []
    }
  }

  // fetching movies from online API; created a function to fetch the movies
  fetchNews = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0cf790498275413a9247f8b94b3843fd"
    ).then (response => response.json())
    .then(result => {
      this.setState ({
        news: result.articles
      })
    })
  }
  componentDidMount() {
    this.fetchNews()
  }


  render() {

    let friends = ["Alexa", "Arianna", "Aaron"]

      return (
        <div>
          <Name lastName = "Hernandez" firstName = "Ana" />
          <Friends listofFriends = {friends} />
          <Stepper />
          <News news = {this.state.news}/>
        </div>
      )
  }
}

export default App;
