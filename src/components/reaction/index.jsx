import React from 'react'


export default class Reaction extends React.Component {
  constructor(props){
    super(props)

    this.reaction = this.reaction.bind(this)
  }

  reaction(){
    this.props.onReaction(this.props.color)
  }

  render(){
    const colorClass = "reaction-icon is-" + this.props.color
    if(this.props.onReaction){
      return <div value="red" onClick={this.reaction} className={colorClass}></div>
    }else{
      return <div value="red" className={colorClass}></div>
    }
  }
}