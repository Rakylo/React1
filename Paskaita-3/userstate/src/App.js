import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Display from "./Components/Display/Display";
import ColorPicker from "./Components/ColorPicker/ColorPicker";

function App() {
  const [number, setnumber] = useState(0);

  return (
    <div>
      <ColorPicker />
      <Button text={"Add one"} onClick={() => setnumber((prev) => prev + 1)} />
      <Display number={number} />
      <Button
        text={"Subtract one"}
        onClick={() => setnumber((prev) => prev - 1)}
      />
    </div>
  );
}

export default App;
