import React from 'react'
import Comment from './Comment'
import firebase from './../../utils/firebase'


export default function ComentList(props){
  return(
    <div> 
      {Object.keys(props.comments || {}).map( key =>  
        <Comment key={key.toString()} data={props.comments[key]} />
      )}
    </div>
  )
}
