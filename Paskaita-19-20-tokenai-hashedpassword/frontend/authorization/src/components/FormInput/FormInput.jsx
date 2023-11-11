import React from "react";

export default function FormInput({ text, value = "", onChange, id, type }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
