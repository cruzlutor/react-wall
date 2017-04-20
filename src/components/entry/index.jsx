import React from 'react'
import CommentList from './../comment/CommentList'


export default class Entry extends React.Component {
  render(){

    return(
      <div className="entry box has-shadow">

        <div className="entry-post box-row">
          <div className="entry-post-avatar">
            <figure><img src="img/profile.jpg" /></figure>
          </div>
          <div className="entry-post-info">
            <div className="entry-post-username">Juan Rodriguez</div>
            <div className="entry-post-time">Hace 2 dias</div>
            <p className="entry-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="entry-post-actions">
              <a href="">Reaccionar</a>
              <a href="">Comentar</a>
            </div>
          </div>
        </div>

        <div className="entry-reactions box-row">
          <div className="entry-reactions-icon is-blue"></div>
          <div className="entry-reactions-icon is-red"></div>
          <div className="entry-reactions-icon is-yellow"></div>
          <div className="entry-reactions-count">12</div>
          <div className="entry-reactions-comments has-text-right">3 comentarios</div>
        </div>

        <CommentList/>

      </div>
    )
  }
}