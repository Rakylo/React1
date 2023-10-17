import React from "react";

export default function Display({ number }) {
  console.log("Display rendered");
  return <h1>{number}</h1>;
}
