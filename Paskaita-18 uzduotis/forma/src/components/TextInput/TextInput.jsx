import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
