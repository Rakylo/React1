import express from "express";
import { getUsers, postUsers } from "./controllers.js";

const router = express.Router();

router.get("/get", getUsers);

router.post("/post", postUsers);

export default router;
