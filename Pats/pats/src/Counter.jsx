import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  //   let count = 10;

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    // count = count + 1;
    // console.log(count);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    // count = count - 1;
    // console.log(count);
  }

  return (
    <div>
      <hr />
      <h1>Counter</h1>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}
export default Counter;
