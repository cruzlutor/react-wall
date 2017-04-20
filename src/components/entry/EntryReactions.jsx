import React from 'react'


export default class EntryReactions extends React.Component {
  render(){
    return(
      <div className="entry-reactions box-row">
        <div className="entry-reactions-icon is-blue"></div>
        <div className="entry-reactions-icon is-red"></div>
        <div className="entry-reactions-icon is-yellow"></div>
        <div className="entry-reactions-count">12</div>
        <div className="entry-reactions-comments has-text-right">3 comentarios</div>
      </div>
    )
  }
}