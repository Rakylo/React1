import React from "react";
import styles from "./Image.module.css";

export default function Image({ imageSource, descriptionText }) {
  return (
    <div className={styles.container}>
      <img src={imageSource} alt={descriptionText} />
      <p>{descriptionText}</p>
    </div>
  );
}
