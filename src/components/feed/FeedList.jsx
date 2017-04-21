import React from 'react'
import Entry from './../entry'
import firebase from './../../utils/firebase'


export default class FeedList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      feed: []
    }
  }

  componentDidMount(){
    firebase.ref('/feed').orderByChild("order").on('value', (snapshot) => {
      let data = snapshot.val() || []
      let results = Object.keys(data).map( value => Object.assign({id: value}, data[value]) ).reverse()
      this.setState({'feed': results})
    })
  }
  
  render(){
    return(
      <div className="feed-list">
        {this.state.feed.map( data =>  
          <Entry key={data.id.toString()} id={data.id} data={data} />
        )}
      </div>
    )
  }
}