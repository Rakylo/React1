import React, { forwardRef } from "react";

export function Input({ text }, ref) {
  return (
    <>
      <label htmlFor="">{text}</label>
      <input ref={ref} type="text" />
    </>
  );
}

export default forwardRef(Input);
