import React from "react";

export default function Radom({ quote, author }) {
  return (
    <div>
      <p>{quote}</p>
      <h5>{author}...</h5>
    </div>
  );
}
