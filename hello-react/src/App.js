//main file that is plugged into the 'root div'
import React, { Component } from 'react'
import Name from './Name'
import Friends from './Friends'

class App extends Component {
  //render function dictates what the component will display on the screen
  // MUST have a component section that returns something!

  render() {

    let friends = ["Alexa", "Arianna", "Aaron"]

      return (
        <div>
          <Name lastName = "Hernandez" firstName = "Ana" />

          <Friends listofFriends = {friends} />
        </div>
      )
  }
}

export default App;
