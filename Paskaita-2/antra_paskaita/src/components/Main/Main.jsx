import React from "react";
import Image from "../Image/Image";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main>
      <h2>Photo Gallery</h2>
      <p>This is my photo gallery</p>
      <div className={styles.container}>
        <Image
          descriptionText={"Nature"}
          imageSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeRPJ6Cu_cdiLiDb_ffrn6r0oi09bJXoGyA&usqp=CAU"
          }
        />
        <Image
          descriptionText={"Kazkas"}
          imageSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01RAGnL2WhW8N99L9HdcvW45xeDGkQTmQbg&usqp=CAU"
          }
        />
        <Image
          descriptionText={"Nature"}
          imageSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeRPJ6Cu_cdiLiDb_ffrn6r0oi09bJXoGyA&usqp=CAU"
          }
        />
      </div>
    </main>
  );
}
