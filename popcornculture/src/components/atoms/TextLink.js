import React from "react";

const TextLink = ({ onButtonClick, linkType, ...props }) => {
  return <div onClick={onButtonClick}>{props.children}</div>;
};

export default TextLink;
