import React from 'react'
import firebase from './../../utils/firebase'


export default class FeedForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      value: ''
    }

    this.sendStatus = this.sendStatus.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendStatus(event){
    event.preventDefault()
    const value = this.state.value
    this.setState({value: ''})

    if(!value) return false
      
    firebase.ref('/feed').push({
      username: 'Juan Rodriguez',
      text: value,
      date: new Date().getTime(),
      reactions: {
        blue: 0,
        red: 0,
        yellow: 0
      } 
    })
  }

  render(){
    return(
      <form className="box feed-form" onSubmit={this.sendStatus}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Escribe aqui tu estado" className="feed-form-input box-row is-green input is-fullwidth" />
        <div className="is-hidden-mobile box-row is-clipped">
          <button type="submit" className="button is-green is-pulled-right">Publicar</button>
        </div>
      </form>
    )
  }
}