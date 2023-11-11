import React from "react";
import styles from "./Button.module.css";

function Button() {
  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div>
      <button className={styles.submit} onClick={handleSubmit}>
        Submit
      </button>
      <button className={styles.cancel} onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Button;
