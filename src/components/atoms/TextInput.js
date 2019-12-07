import React from "react";

const TextInput = ({ placeholder, value, onChange, ...props }) => {
  return (
    <input
      className="Inputs"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
