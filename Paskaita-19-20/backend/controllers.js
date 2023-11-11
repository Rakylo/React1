import bcypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function register(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }
  try {
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    console.log(hashedPassword);

    res.json({ user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPasswordCorrect = await bcypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
  //3 dalykai kuriuos issaugojam user id jwt secret ir kiek galioja.

  res.json({ token });
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({});

    console.log(req.userId);

    res.status(200).json({ users });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
