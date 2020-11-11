// responsible for displaying header content
import React, { Component } from 'react'
import "../Styles/Header.css"

class Header extends Component {
    render () {
        return (
            <div className="header-div">
                <h1>WhatsTheWeather?</h1>
            </div>
        )
    }
}


export default Header