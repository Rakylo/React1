import { createContext, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoItem from "./components/TodoItem/TodoItem";

export const todoContext = createContext();



function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <todoContext.Provider value={{ todoList, setTodoList }}>
        <TodoList />
        <AddTodo />
        <TodoItem />
      </todoContext.Provider>
    </div>
  );
}

export default App;
