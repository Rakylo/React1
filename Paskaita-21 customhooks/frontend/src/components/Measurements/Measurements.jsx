import React from "react";
import { useWindowMeasurement } from "../../hooks/useWindowMeasurement.jsx";

export default function Measurements() {
  const { height, width } = useWindowMeasurement();

  return (
    <div>
      <p>Height: {height}</p>
      <p>width: {width}</p>
    </div>
  );
}
