import React from 'react'

export default class EntryComment extends React.Component {
  render(){
    return(
      <div className="entry-post is-comment">
        <div className="entry-post-avatar">
          <figure><img src="img/profile.jpg" /></figure>
        </div>
        <div className="entry-post-info">
          <div className="entry-post-text">
            <span className="entry-post-username">Juan Rodriguez </span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div className="entry-post-time">Hace 2 dias</div>
        </div>
      </div>
    )
  }
}