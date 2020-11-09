import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <h1> {this.props.lastName}, {this.props.firstName}</h1>
        )
    }
}

//exporting so other files can import it
export default Name