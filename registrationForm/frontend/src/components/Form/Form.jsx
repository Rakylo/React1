import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import axios from "axios";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HOST = "http://localhost:3001/post";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (!/^[A-Z]/.test(name)) {
      alert("Name should start with a capital letter");
      return;
    }

    if (!/[^A-Za-z0-9]/.test(password) || password.length <= 4) {
      alert("Password should contain a symbol and be longer than 4 characters");
      return;
    }

    try {
      const { data } = await axios.post(HOST, {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
      alert("sekmingai uzsiregistravote");
    } catch (error) {
      alert("ivyko klaida");
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <form onSubmit={handleRegister} className={styles.form}>
        <h2>Get Started</h2>
        <p className={styles.pirmasp}>Already have an account?</p>
        <a className={styles.signupas} href="http://google.com">
          Sign in
        </a>
        <Button />
        <p className={styles.antrasp}>Or</p>
        <label htmlFor="username">Name</label>
        <span className={styles.inputIcon}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required={true}
          id="username"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <span className={styles.inputIcon1}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          placeholder="email@something.something"
          id="email"
          type="email"
        />
        {""}
        <label htmlFor="password">Password</label>
        <span className={styles.inputIcon2}>
          <FontAwesomeIcon icon={faLock} />
        </span>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          placeholder="Password"
          id="password"
          type="password"
        />
        <button
          // onClick={handleRegister}
          className={styles.button}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
