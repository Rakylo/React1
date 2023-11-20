import React from "react";
import { createPortal } from "react-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./Modal.module.css";

export default function Modal({ isOpen }) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.modalas}>
      <RegistrationForm />
    </div>,
    document.body
  );
}
