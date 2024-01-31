import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  // Case 1: Run on Every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  
  })

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Hey Welcome to my page. This is the first render")
  
  }, [])

  // Case 3: Run only on first render
  useEffect(() => {
   alert("Hey I'm running because color was changed")
  }, [color])
  

  return (
    <div>I am a navbar {color} color hehe..</div>
  )
}

export default Navbar