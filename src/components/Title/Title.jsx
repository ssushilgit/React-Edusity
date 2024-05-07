import React from 'react'
import './Title.css'
// import {props} from 'react'

const Title = (props) => {
  return (
    <div className='title'>
        <p>{props.subtitle}</p>
        <h2>{props.title}</h2>
      
    </div>
  )
}
// import './Title.css'
export default Title
