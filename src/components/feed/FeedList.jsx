import React from 'react'
import Entry from './../entry'


export default class FeedList extends React.Component {
  render(){
    return(
      <div className="feed-list">
        <Entry/>
        <Entry/>
        <Entry/>
      </div>
    )
  }
}