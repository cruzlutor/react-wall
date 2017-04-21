import React from 'react'
import classNames from 'classnames'
import smoothScroll from 'smooth-scroll'
import EntryActions from './EntryActions'
import CommentList from './../comment/CommentList'
import Reaction from './../reaction'
import firebase from './../../utils/firebase'
import utils from './../../utils'


export default class Entry extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      comment: '',
      hideCommentInput: true
    }

    this.reaction = this.reaction.bind(this)
    this.openComment = this.openComment.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendComment = this.sendComment.bind(this)
  }

  openComment(event){
    smoothScroll.animateScroll(event.pageY)
    this.setState({hideCommentInput: false});
  }

  reaction(type){
    let ref = firebase.ref('/feed/'+this.props.id+'/reactions/'+type)
    ref.transaction(current =>  (current || 0) + 1)
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  sendComment(event){
    event.preventDefault()
    const comment = this.state.comment
    this.setState({comment: ''})

    if(!comment) return false

    firebase.ref('/feed/' + this.props.id + '/comments').push({
      username: 'Juan Rodriguez',
      text: comment,
      date: new Date().getTime()
    })
  }

  render(){
    const nReactions = Object.keys(this.props.data.reactions).reduce( (sum, elem) => sum + this.props.data.reactions[elem], 0)
    const nComments = Object.keys(this.props.data.comments || {}).length
    const tComments = (nComments > 1) ? nComments + ' Comentarios' : nComments + ' Comentario'
    const reactionClass = classNames('entry-reactions', 'box-row', {
      'is-hidden': nReactions == 0 && nComments == 0
    })
    const commentClass = classNames('entry-comments-input', { 'is-hidden': this.state.hideCommentInput})

    return(
      <div id={this.props.data.id} className="entry box has-shadow">

        <div className="entry-post box-row">
          <div className="entry-post-avatar">
            <figure><img src="img/profile.jpg" /></figure>
          </div>
          <div className="entry-post-info">
            <div className="entry-post-username">{this.props.data.username}</div>
            <div className="entry-post-time">{utils.calculateDays(this.props.data.date)}</div>
            <p className="entry-post-text">{this.props.data.text}</p>

            <div className="entry-buttons is-hidden-mobile">
              <EntryActions onReaction={this.reaction} onClickComment={this.openComment} />
            </div>

          </div>
        </div>

        <div className="entry-buttons box-row is-hidden-tablet has-no-padding">
          <EntryActions onReaction={this.reaction} onClickComment={this.openComment} />
        </div>

        <div className={reactionClass}>
          {this.props.data.reactions.blue > 0 && 
            <Reaction color="blue"/>
          }
          {this.props.data.reactions.red > 0 && 
            <Reaction color="red"/>
          }
          {this.props.data.reactions.yellow > 0 && 
            <Reaction color="yellow"/>
          }
          {nReactions > 0 && 
            <div className="entry-reactions-count is-hidden-mobile">{nReactions}</div>
          }
          <div className="entry-reactions-comments has-text-right">{tComments}</div>
        </div>

        <div className="entry-comments box-row is-dark">
          <CommentList entryId={this.props.id} comments={this.props.data.comments} />
          <form className={commentClass} onSubmit={this.sendComment}>
            <input value={this.state.comment} onChange={this.handleChange} placeholder="Escribe un comentario" className="entry-comments-textarea is-fullwidth input" />
          </form>
        </div>

      </div>
    )
  }
}