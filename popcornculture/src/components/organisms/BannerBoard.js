import React from "react";
import SearchBoard from "../molecules/SearchBoard";

const BannerBoard = ({onSearch}) => {
  return (
    <>
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
    </>
  );
};

export default BannerBoard;
