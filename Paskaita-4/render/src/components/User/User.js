import React from "react";

export default function User({ name, city, street, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{city}</h3>
      <h4>{street}</h4>
      <h5>{phone}</h5>
      <hr />
    </div>
  );
}
