import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../store/todoSlice"
import ToDoItem from "./ToDoItem"

function Tdl() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({title: value}))
    setValue("")
  }
    
  return (
    <>
        <div className="flex flex-col items-center justify-center w-8/12 h-2/3">
            <h1 className="text-5xl font-bold text-slate-600 dark:text-slate-200">TODO LIST</h1>
            <div className="flex flex-row w-4/5 mt-8">
              <input 
                type="text" 
                value={value}
                className="border-2 border-indigo-500 rounded-md rounded-r-none w-4/5 h-10 p-2 bg-white dark:bg-gray-800 dark:text-white" 
                onChange={(e) => setValue(e.target.value)}
              />
              <button 
                onClick={handleSubmit} 
                className="bg-indigo-500 text-white h-10 w-32 text-lg font-semibold rounded-md rounded-l-none hover:bg-indigo-600 transition-colors"
              >
                Submit
              </button>
            </div>
            <div className="flex flex-col w-4/5 mt-8 mb-1">
                <ToDoItem/>
            </div>
        </div>
    </>
  )
}

export default Tdl;
