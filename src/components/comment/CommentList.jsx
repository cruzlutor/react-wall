import React from 'react'
import Comment from './Comment'


export default class EntryComments extends React.Component {
  render(){
    return(
      <div className="entry-comments box-row is-dark"> 
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <textarea placeholder="Escribe un comentario" className="entry-comments-textarea is-fullwidth input"></textarea>
      </div>
    )
  }
}