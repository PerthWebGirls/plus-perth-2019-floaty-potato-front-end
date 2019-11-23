import React from "react";

const Button = ({ onButtonClick, ...props }) => {
  return (
    <button className="Button" onClick={onButtonClick}>
      {props.children}
    </button>
  );
};

export default Button;
