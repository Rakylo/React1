import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  async function loginButton() {
    axios
      .post("http://localhost:3001/login", {
        username: userName,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", "123");
        navigate("/");
      })
      .catch((error) => alert("Wrong username or password"));
  }

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={loginButton}>Log in</button>
    </div>
  );
}
