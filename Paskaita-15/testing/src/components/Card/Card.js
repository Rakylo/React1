import React from "react";
import style from "./Card.module.css";

export default function Card() {
  return (
    <div className={style.cardContainer}>
      <div>
        <h2>
          "There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors."
        </h2>
        <p>Jeff Atwood</p>
        <button>
          View on <a href="https://twitter.com/">Twitter</a>
        </button>
        <button>
          Share on <a href="https://facebook.com">Facebook</a>
        </button>
      </div>
    </div>
  );
}
