import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState= {
    todos:[{
        id: 1,
        text:"hello world"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        // reducer always has state & action para (state,action)  You get value from Action
        addTodo: (state, action) => {
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },  
        removeTodo: (state,action) => {
            state.todos=state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload; // Extract the ID and new text from action payload
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text; // Update the text of the matched todo
            }
        }
       

        
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer