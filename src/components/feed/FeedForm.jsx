import React from 'react'

export default class FeedForm extends React.Component {
  render(){
    return(
      <div className="box feed-form">
        <input type="text" placeholder="Escribe aqui tu estado" className="feed-form-input box-row is-green input is-fullwidth" />
        <div className="box-row is-clipped">
          <button type="button" className="button is-green is-pulled-right">Publicar</button>
        </div>
      </div>
    )
  }
}