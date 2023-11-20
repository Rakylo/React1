import React from "react";
import Form from "../Form/Form";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  return (
    <div className={styles.pagrindas}>
      <img
        src="https://cdn.paylocity.com/cdn/branding/login-content.svg"
        alt=""
      />
      <Form />
    </div>
  );
}
