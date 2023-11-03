import express from "express";
import { deleteTodos, getTodos, postTodos } from "./controllers.js";

const router = express.Router();

router.get("/todos", getTodos);

router.post("/todos1", postTodos);

router.delete("/todos/:id", deleteTodos);

export default router;
