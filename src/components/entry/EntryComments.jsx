import React from 'react'
import EntryComment from './EntryComment'


export default class EntryComments extends React.Component {
  render(){
    return(
      <div className="entry-comments box-row is-dark"> 
        <EntryComment/>
        <EntryComment/>
        <EntryComment/>
        <EntryComment/>
        <textarea placeholder="Escribe un comentario" className="entry-comments-textarea is-fullwidth input"></textarea>
      </div>
    )
  }
}