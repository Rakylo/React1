import React, { forwardRef } from "react";

const HoverableButton = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      onMouseEnter={() => {
        // Handle hover-in event
        console.log("Hovered in");
      }}
      onMouseLeave={() => {
        // Handle hover-out event
        console.log("Hovered out");
      }}
      {...props}
    />
  );
});

export default HoverableButton;
