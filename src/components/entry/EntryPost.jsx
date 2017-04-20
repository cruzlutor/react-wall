import React from 'react'

export default class EntryPost extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
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
    )
  }
}