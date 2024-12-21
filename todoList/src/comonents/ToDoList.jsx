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
  }
    
  return (
    <>
        <div className="border-slate-600 border-2  flex flex-col items-center justify-center w-8/12 h-2/3">
            <h1 className=" text-5xl text-slate-600 font-bold">TODO LIST</h1>
            <div className="flex flex-row w-4/5 mt-8">
              <input 
                type="text" 
                className="border-2 border-indigo-500 rounded-md rounded-r-none w-4/5 h-10 p-2" 
                onChange={(e) => setValue(e.target.value)}
            />
              <button onClick={handleSubmit} className="bg-indigo-500 text-white h-10 w-32 text-lg font-semibold rounded-md rounded-l-none">Submit</button>
            </div>
            <div className="flex flex-col w-4/5 mt-8 border-2 border-slate-600">
                <ToDoItem/>
            </div>
        </div>
    </>
  )
}

export default Tdl;
