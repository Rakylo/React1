import "./App.css";
import CreateTodoItem from "./Components/CreateTodo/CreateTodoItem.js";
import TodoItem from "./Components/TodoItem/TodoItem.js";
import TodoList from "./Components/TodoList/TodoList.js";

function App() {
  return (
    <div>
      <TodoList />
      <br />
      <TodoItem />
      <br />
      <CreateTodoItem />
    </div>
  );
}

export default App;
