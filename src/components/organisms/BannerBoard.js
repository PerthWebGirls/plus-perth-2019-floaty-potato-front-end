import React from "react";
import SearchBoard from "../molecules/SearchBoard";
import "./BannerBoard.css"

const BannerBoard = ({onSearch}) => {
  return (
    < div className="BannerBoard">
      <div
        className="BannerImage"
        style={{
          backgroundImage: `url(/static/popcorn-stripes.jpg)`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div>
          <img src="/static/popcorn-culture.png" className="big-pop" alt="popcorn" />
          <div className="SearchBoard">
          <SearchBoard onSearch={onSearch} />
        </div>
        <div className="color-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerBoard;
