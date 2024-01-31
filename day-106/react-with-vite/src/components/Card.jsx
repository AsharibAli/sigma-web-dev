import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card' style={{  overflow: "hidden"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4WvC5PYhh90XerR_RZXPr2mpyVzAB_f7jg&usqp=CAU" alt=""  width={333} style={{border: "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card