import React, { Component } from 'react'
import './Article.css'

class Article extends Component {
    render() {
        let articleItems = this.props.listOfArticles.map((article, index) => {
            return (
              <div key = {index}className="article-div">
                <h2>{article.title}</h2>
                <p>{article.content}</p>

                <div className="comments-likes-div">
                  <p>{article.comments} comments</p>
                  <p>{article.likes} likes</p>
                </div>
              </div>
            )
            ;
        })

        return (
            articleItems
        )
    }
}


export default Article