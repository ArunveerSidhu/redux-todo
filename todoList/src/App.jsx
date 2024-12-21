import React from "react"
import Tdl from "./comonents/ToDoList"
import DarkModeToggle from "./comonents/DarkModeToggle"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <DarkModeToggle />
      <div className="flex h-screen w-screen justify-center items-center">
        <Tdl/>
      </div>
    </div>
  )
}

export default App
