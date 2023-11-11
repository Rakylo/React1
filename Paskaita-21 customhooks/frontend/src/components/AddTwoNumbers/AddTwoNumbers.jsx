import React from "react";
import { useState } from "react";
import { useAddition } from "../../hooks/useAddition.jsx";

export default function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const sum = useAddition(+firstNumber, +secondNumber);

  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <h1>{sum}</h1>
    </div>
  );
}
