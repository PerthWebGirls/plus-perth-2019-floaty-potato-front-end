import React from "react";
import "./Icon.css"
import { FaUserAlt } from "react-icons/fa";

const Icon = ({ onIconClick, ...props }) => {
  return (
    <div className="Icon">
      <FaUserAlt />
    </div>
  );
};

export default Icon;
