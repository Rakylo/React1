import React, { useContext } from "react";
import { todoContext } from "../../App";

export default function TodoList() {
  const { todos } = useContext(todoContext);

  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={todo.completed}
                // onChange={() => toggleTaskCompletion(todo.id)}
              />
              <span>{todo.text}</span>
              {/* <button onClick={() => removeTask(todo.id)}>Remove</button> */}
            </li>
          ))}
      </ul>
    </div>
  );
}
