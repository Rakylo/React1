import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/145/103/non_2x/lion-head-logo-free-vector.jpg"
        alt="Logo"
      />
      <nav>
        <a href="">Home</a>
        <a href="">Contacts</a>
        <a href="">Products</a>
      </nav>
    </header>
  );
}
