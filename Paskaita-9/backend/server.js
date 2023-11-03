import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "Marius" && password === "1234") {
    res.status(200).json({ message: "login success" });
  } else {
    res.status(401).json({ message: "login failed" });
  }
});

app.listen(3001, () => console.log("App running"));
