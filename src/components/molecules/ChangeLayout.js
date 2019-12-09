import React from "react";
import ListView from "../atoms/ListView";
import GridView from "../atoms/GridView";
import SortBy from "../atoms/SortBy";
import "./ChangeLayout.css"

const ChangeLayout = () => {
  return (
    <div className="changeDisplay" >
      <div className="LayoutIcon"><ListView /></div>
      <div className="LayoutIcon"><GridView className="LayoutIcon" /></div>
      <div className="LayoutIcon"><SortBy className="LayoutIcon" /></div>
    </div>
  );
};

export default ChangeLayout;
