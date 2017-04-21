import React from 'react'
import utils from './../../utils'


export default function Comment(props) {
  return (
    <div className="entry-post is-comment">
      <div className="entry-post-avatar">
        <figure><img src="img/profile.jpg" /></figure>
      </div>
      <div className="entry-post-info">
        <div className="entry-post-text">
          <span className="entry-post-username">{props.data.username} </span>
          <span>{props.data.text}</span>
        </div>
        <div className="entry-post-time">{utils.calculateDays(props.data.date)}</div>
      </div>
    </div>
  )
}