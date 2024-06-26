import {createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


 export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {           // properties & functions
        addTodo: (state, action) => {   // state has current state & action has passed data
            const todo = {     // making a todo
                id: nanoid(),
                text: action.payload   // payload is a object
            }
            state.todos.push(todo)      // adding todo to state
        },    
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        },
    }   
 })

export const {addTodo, removeTodo} = todoSlice.actions   // methods exported for used f=by components

export default todoSlice.reducer  // reducer as whole to be used by store