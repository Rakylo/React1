import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <img
        src="https://www.goodfreephotos.com/albums/other-landscapes/landscape-with-mountains-sea-and-bay.jpg"
        alt="random"
      /> */}

      <img
        class="image"
        src="https://www.goodfreephotos.com/albums/other-landscapes/landscape-with-mountains-sea-and-bay.jpg"
        alt=""
      />
      <h6>Title</h6>
      <p>
        Some about text <br></br> in two lines
      </p>
      <button>Button</button>
    </header>
  );
}
