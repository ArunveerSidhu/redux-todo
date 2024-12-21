import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {id:1, title:"Learn Redux", completed:false},
        {id:2, title:"Eat food", completed:false}, 
        {id:3, title:"Watch Bleach", completed:true},
    ],
    reducers: {
        addTodo : (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        markComplete: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    }
})

export const { addTodo, markComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;