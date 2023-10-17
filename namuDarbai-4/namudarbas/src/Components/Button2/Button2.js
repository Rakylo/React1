import React from "react";

export default function Button2({ zipcode, name }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{zipcode}</h3>
      <hr />
    </div>
  );
}
