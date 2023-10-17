import React from "react";
import styles from "./Main.module.css";
import Image from "../Image/Image";

export default function Header() {
  return (
    <main className={styles.main}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Portfolio</h2>
      <p>
        Capturing life's moments in vibrant colors and exquisite details.
        Explore my photo portfolio and relive the stories through my len
      </p>
      <div className={styles.container}>
        <Image
          descriptionText={"Girl"}
          imageSource={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
        <Image
          descriptionText={"Girl"}
          imageSource={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
        <Image
          descriptionText={"Girl"}
          imageSource={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
        <Image
          descriptionText={"Eye"}
          imageSource={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
        />
        <Image
          descriptionText={"Eye"}
          imageSource={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
        />
        <Image
          descriptionText={"Eye"}
          imageSource={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
        />
      </div>
    </main>
  );
}
