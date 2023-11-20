import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        console.log("pending");
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.todos.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state) => {
        console.log("rejected");
      });
    builder
      .addCase(deleteTodoAsync.pending, (state) => {
        console.log("pending");
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodoAsync.rejected, (state) => {
        console.log("rejected");
      });
  },
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (data) => {
    const { data: responseData } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        title: data.title,
        completed: false,
      }
    );
    return responseData;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
  }
);

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
