import React from 'react'
import TopNav from './../shared/TopNav'
import FeedForm from './../feed/FeedForm'
import FeedList from './../feed/FeedList'


export default function App(props) {
  return (
    <div>
      <TopNav/>
      <div className="wrapper feed">
        <FeedForm/>
        <FeedList/>
      </div>
    </div>
  )
}