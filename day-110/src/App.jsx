/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showbtn, setshowbtn] = useState(false)

  const [todos, settodos] = useState([
    { title: 'Hey', desc: 'I am a good todo' },
    { title: 'Hey Another todo', desc: 'I am a good todo too ' },
  ])

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border border-1 border-l-purple-500">
          <div className='todo'>{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {todos.map(todo => {
        return <Todo key={todo.title} todo={todo} />
      })}
      {/* {showbtn && <button>showbtn is true</button>} */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
