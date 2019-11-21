import React from "react";

const textLink = ({ onButtonClick, linkType, ...props }) => {
  return <div onClick={onButtonClick}>{props.children}</div>;
};

export default textLink;
