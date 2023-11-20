import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      id: crypto.randomUUID(),
      completed: false,
    },
    {
      title: "Todo 2",
      id: crypto.randomUUID(),
      completed: false,
    },
    {
      title: "Todo 3",
      id: crypto.randomUUID(),
      completed: false,
    },
  ]);

  function getTodosStorage() {
    const todosStorage = localStorage.getItem("todos");
    if (todosStorage) {
      return JSON.parse(todosStorage);
    } else {
      return [];
    }
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>Todo List</h1>
      <form>
        <label htmlFor="">New Todo</label>
        <br />
        <input type="text" value={""} id="item" />
      </form>
      <button>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />{" "}
            {todo.title}{" "}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
