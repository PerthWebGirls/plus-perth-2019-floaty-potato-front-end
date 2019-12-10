import React from "react";
import "./Button.css"

const Button = ({ onButtonClick,type,...props }) => {
  return (
<button className="Button searchbutton" onClick={onButtonClick}>
      {props.children}
    </button>
  );
};

export default Button;
