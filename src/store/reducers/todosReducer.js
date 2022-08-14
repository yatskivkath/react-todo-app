import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
      addTodo: (state, action) => {
          state.value = [
              ...state.value,
              action.todo
          ]
      },
      deleteTodo: (state, action) => {
          state.value = state.value.filter(t => t.timestamp != action.payload.todo.timestamp);
      },
      checkTodo: (state, action) => {
          state.value = state.value.map(t => {
              if(t.timestamp == action.payload.todo.timestamp) 
                return {
                    ...t,
                    isChecked: true
                };
            return t;
          })
      },
  },
})

export const { addTodo, checkTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer