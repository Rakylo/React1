import React, { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:3001/todos1";
const ENDPOINT1 = "http://localhost:3001/todos";

export default function CreateTodoItem() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(ENDPOINT, {
        title,
      });

      const newTodo = response.data;
      // Clear the input field after creating a new todo
      setTitle("");

      // Fetch and update the list of todos after creating a new todo
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      fetchTodos();

      console.log("New todo created:", newTodo);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const fetchTodos = () => {
    axios
      .get(ENDPOINT1)
      .then(({ data }) => {
        console.log("data", data);
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  };

  return (
    <div>
      <hr></hr>
      <h1>Create Todo Item</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button type="submit">Create Todo Item</button>
        <br />
        <hr></hr>
      </form>
    </div>
  );
}
