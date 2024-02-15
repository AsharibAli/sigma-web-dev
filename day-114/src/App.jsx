import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowfinished] = useState()


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLs()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLs()

  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLs()

  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {

    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLs()

  }

  const toggleFinished = (e) => {
    setShowfinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <h1 className="font-bold text-center text-3xl">iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Add a todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className="rounded-full p-5 py-1 w-full" />
            <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-violet-800 mx-2 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-full disabled:bg-slate-800">Save</button>
          </div>
        </div>
        <input id="show" className="my-4 mr-2" onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className="mx-2" htmlFor="show">Show Finished</label>
        <div className="h-1 bg-black opacity-50 mx-auto my-2"></div>
        <hr />
        <h1 className="text-lg font-bold">Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div className=" font-bold m-5">No todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
              <div className="flex gap-5">
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="button">
                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"><MdDeleteSweep /></button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
