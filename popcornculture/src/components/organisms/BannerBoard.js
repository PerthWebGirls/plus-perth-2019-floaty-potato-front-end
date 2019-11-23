import React from "react";
import SearchBoard from "../molecules/SearchBoard";

const BannerBoard = () => {
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
          <SearchBoard />
          <div className="color-divider"></div>
        </div>
      </div>
    </>
  );
};

export default BannerBoard;
