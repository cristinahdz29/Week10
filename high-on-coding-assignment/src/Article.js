import React, { Component } from 'react'
import './Article.css'

class Article extends Component {
    render(){
        return (
            <div className = 'article-div'>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>

                <div className = 'comments-likes-div'>
                    <p>{this.props.comments} comments</p>
                    <p>{this.props.likes} likes</p>
                </div>
            </div>
        )//need to return something
    }
}



export default Article