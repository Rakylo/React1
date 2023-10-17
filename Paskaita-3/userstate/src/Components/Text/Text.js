import React, { useState } from "react";
import Text2 from "./Text2/Text2";

export default function Text() {
  const [numberState, setNumberState] = useState(100);

  const [text, settext] = useState("Hello");

  function buttonHandler() {
    setNumberState((prev) => prev + 1);

    settext("asdfgg");
  }

  return (
    <div>
      {numberState}
      <button onClick={buttonHandler}>Click Me</button>
      <Text2 text={text} />
    </div>
  );
}
