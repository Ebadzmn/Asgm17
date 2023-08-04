import {createSlice} from '@reduxjs/toolkit';


export const todoSlice = createSlice({
           name:'todo',

             initialState:{

                    todoList:[]
             },
                reducers:{
                        AddTodo:(state,action) => {
                            state.todoList.push (action.payload)
                        },


                          DeleteTodo:(state,action) => {
                            state.todoList.splice(action.payload,1)
                          },


                    UpdateTodo: (state, action) => {
                        const { index, value } = action.payload;
                        state.todoList[index] = value;
                    },

                    checkTodo: (state, action) => {
                        const index = action.payload;
                        state.todoList[index].completed = !state.todoList[index].completed;
                    },

                }

})

export const {AddTodo,DeleteTodo,UpdateTodo,checkTodo} = todoSlice.actions;

export default todoSlice.reducer;


























