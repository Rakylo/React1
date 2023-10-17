import React, { useEffect, useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Counter has changed");
  }, [counter2]);

  return (
    <>
      <h2>{counter} </h2>
      <h2>{counter2} </h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add one</button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Add one to second
      </button>
    </>
  );
}
