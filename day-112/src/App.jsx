import { useState } from 'react'

import './App.css'

function App() {
  // const [name, setName] = useState("Asharib")
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("hey I am clicked")
    console.log(handleClick);
  }

  // const handleMouseOver = () => {
  //   alert("hey I am clicked")
  // }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({ ...form, [e.target.value]: e.target.value })
  }


  return (
    <>
      <div className='button'>
        <button onClick={handleClick}>Click me</button>
        {/* <div className="red" onMouseOver={handleMouseOver}>I am red!!</div> */}
      </div>

      <input type="text" name="email" value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone ? form.phone : ""} onChange={handleChange} />

    </>
  )
}

export default App
