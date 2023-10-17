import React from "react";
import AntrasKomponentas from "../AntrasKomponentas/AntrasKomponentas";

export default function PirmasKomponentas() {
  const age = 20;

  function handleClick() {
    console.log("Battonas has been clicked");
  }

  return (
    <div>
      <h1>{age + 100}</h1>
      <AntrasKomponentas />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
