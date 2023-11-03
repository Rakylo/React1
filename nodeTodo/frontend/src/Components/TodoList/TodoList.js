import React, { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:3001/todos";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [todos]);
  //perpaišom kai pasikeičia todos!!!

  const handleDeleteTodo = (id) => {
    // Send a request to delete the todo with the given ID
    axios
      .delete(`${ENDPOINT}/${id}`)
      .then(() => {
        // After successful deletion, update the todos list in the UI
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  return (
    <div>
      <h1>Todo List:</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
