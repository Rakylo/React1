import React from "react";
import styles from "./Input.module.css";

export default function Input({
  startIcon,
  value,
  onChange,
  endIcon,
  type,
  isValid,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        {startIcon}
        <input
          type={type}
          onChange={onChange}
          value={value}
          className={styles.input}
        />
        {endIcon}
      </div>
      <p className={styles.text}>{!isValid && "Not Valid"}</p>
    </>
  );
}
