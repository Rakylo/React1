import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodoAsync, deleteTodoAsync } from "../../redux/TodoSlice/todoSlice";

export default function Todo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoslice.todos);

  function handleDelete(id) {
    dispatch(deleteTodoAsync(id));
  }

  return (
    <div>
      <h3>Todo</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(addTodoAsync({ title: input }))}>
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
