import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    todoslice: todoSlice,
  },
});
