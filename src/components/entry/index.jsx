import React from 'react'
import EntryPost from './EntryPost'
import EntryComments from './EntryComments'
import EntryReactions from './EntryReactions'


export default class Entry extends React.Component {
  render(){

    return(
      <div className="entry box has-shadow">
        <EntryPost/>
        <EntryReactions/>
        <EntryComments/>
      </div>
    )
  }
}