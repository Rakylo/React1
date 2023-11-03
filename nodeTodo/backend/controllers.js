import todos from "./models/todos.js";

export async function getTodos(req, res) {
  try {
    const allTodos = await todos.find();
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function postTodos(req, res) {
  const { title, completed } = req.body;
  try {
    const addTodo = await todos.create({ title, completed });
    res.status(201).json(addTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteTodos(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No todo with id: ${id}`);

  try {
    const deleteTodo = await todos.findByIdAndDelete(id);
    if (!deleteTodo) return res.status(404).send(`No todo with id: ${id}`);
    res.status(200).json(deleteTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
