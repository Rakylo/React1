import React, { useState, useRef } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);

  const intervalRef = useRef();

  function buttonHandler() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
  }

  return (
    <div>
      <h3>{counter}</h3>
      <br />
      <button onClick={buttonHandler}>Play/Pause</button>
    </div>
  );
}
