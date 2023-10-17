import React, { useState } from "react";

function Button() {
  const [text, settext] = useState("Kokia tavo nuotaika siandien?");

  const pakeistiNuotaika = (naujaNuotaika) => {
    settext(naujaNuotaika);
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => pakeistiNuotaika("Laimingas")}>Laimingas</button>
      <button onClick={() => pakeistiNuotaika("Liudnas")}>Liudnas</button>
      <button onClick={() => pakeistiNuotaika("Piktas")}>Piktas</button>
    </div>
  );
}

export default Button;
