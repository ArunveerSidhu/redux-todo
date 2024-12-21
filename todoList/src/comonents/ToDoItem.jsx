import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, markComplete } from '../store/todoSlice'

function ToDoItem() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      {todos.map((todo) => (
        <div 
          key={todo.id} 
          className="flex items-center rounded-md justify-between p-3 border-b border-slate-300 dark:border-slate-600 last:border-b-0 bg-gray-200 dark:bg-gray-800"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(markComplete(todo.id))}
              className="w-5 h-5 accent-indigo-500"
            />
            <span className={`text-lg ${
              todo.completed 
                ? 'line-through text-slate-400 dark:text-slate-500' 
                : 'text-slate-700 dark:text-slate-200'
            }`}>
              {todo.title}
            </span>
          </div>
          
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="h-10 w-16 bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-colors"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  )
}

export default ToDoItem