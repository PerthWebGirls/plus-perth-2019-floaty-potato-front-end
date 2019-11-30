import React from "react";
import SearchBoard from "../molecules/SearchBoard";
import "./BannerBoard.css"

const BannerBoard = ({onSearch}) => {
  return (
    < div className="BannerBoard">
      <div
        className="BannerImage"
        style={{
          backgroundImage: `url(/static/banner.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="SearchBoard">
          <SearchBoard onSearch={onSearch} />
          <div className="color-divider"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerBoard;
