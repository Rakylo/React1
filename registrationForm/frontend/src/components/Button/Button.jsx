import React from "react";
import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Button() {
  return (
    <div className={styles.mygtukai}>
      <button className={styles.google}>
        {" "}
        <FontAwesomeIcon icon={faGoogle} />
        <a className={styles.go} href="http://google.com">
          sign up
        </a>
      </button>
      <button className={styles.facebook}>
        {" "}
        <FontAwesomeIcon icon={faFacebook} />
        <a className={styles.fb} href="http://facebook.com">
          sign up
        </a>
      </button>
    </div>
  );
}
