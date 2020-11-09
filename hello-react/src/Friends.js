import React, { Component } from 'react'

class Friends extends Component {
    render() {
        let friendItems = this.props.listofFriends.map((friend, index) => {
        return <li key = {index}> {friend}</li>
        })

        return (
            friendItems
        )
    }
}

export default Friends