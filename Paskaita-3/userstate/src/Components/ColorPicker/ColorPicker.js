import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setcolor] = useState("red");
  console.log("Color picker rendered");
  return (
    <div>
      <button onClick={() => setcolor("red")}>Red</button>
      <button onClick={() => setcolor("blue")}>Blue</button>
      <button onClick={() => setcolor("green")}>Green</button>
      <div style={{ backgroundColor: color }}>Hello</div>
    </div>
  );
}
