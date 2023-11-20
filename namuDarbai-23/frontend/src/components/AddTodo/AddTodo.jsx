import React, { useState, useContext } from "react";
import { todoContext } from "../../App";

const AddTodo = () => {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useContext(todoContext);

  const handleAddTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask !== "") {
      addTask(trimmedTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTodo;
