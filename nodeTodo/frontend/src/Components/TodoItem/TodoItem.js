import React, { useEffect, useState } from "react";
import axios from "axios";

const ENDPOINT = "http://localhost:3001/todos";

export default function TodoItem() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        // console.log(data);
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Single Todo Item</h1>
        <div>
          <h3> {todos[1] && todos[1].title}</h3>
          <p>{todos[1] && todos[1].description}</p>
        </div>
      </div>
    </div>
  );
}

// function refreshPage() {
//   window.location.reload(false);
// }
// refreshPage();
