import React from 'react'
import classNames from 'classnames'
import Reaction from './../reaction'


export default class EntryActions extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hidePopup: true
    }

    this.closePopup = this.closePopup.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  closePopup(){
    this.setState({hidePopup: true})
  }

  toggle(){
    this.setState({hidePopup: !this.state.hidePopup})
  }

  render(){
    const popupClass = classNames('entry-actions-item-popup', { 'is-hidden': this.state.hidePopup})

    return(
      <div className="entry-actions">
        <div className="entry-actions-item" onClick={this.toggle} onMouseLeave={this.closePopup}>
          Reaccionar
          <div className={popupClass}>
            <Reaction color="blue" onReaction={this.props.onReaction} />
            <Reaction color="red" onReaction={this.props.onReaction} />
            <Reaction color="yellow" onReaction={this.props.onReaction} />
          </div>
        </div>
        <div className="entry-actions-item" onClick={this.props.onClickComment}>Comentar</div>
      </div>
    )
  }
}