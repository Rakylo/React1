import { useMemo, useCallback, useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  function heavyCaclulation() {
    let x = 0;
    for (let i = 0; i < 1000000000; i++) {
      x++;
    }
    setNumber(x);
  }
  return (
    <div>
      {number}
      <button onClick={heavyCaclulation}>Click me</button>
    </div>
  );
}

export default App;
