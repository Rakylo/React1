import React from "react";
// import styles from "./Button.module.css";

export default function Button(text = "default text", onClick, className) {
  return (
    <button className={styles.background} onClick={onClick}>
      {text}
    </button>
  );
}
