import React from "react";
// import { Link } from "react-router-dom";

const ProviderItem = ({ name, uri, image, ...props }) => {
  return (
    <div className="provider">
      {/* <Link to="{url}"/> */}
      <div
        class="cityimage"
        style={{
          backgroundImage: `url(/static/${name}.jpg)`,
          width: 10,
          height: 10
        }}
      ></div>
    </div>
  );
};

export default ProviderItem;
