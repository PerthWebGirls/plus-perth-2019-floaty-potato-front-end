import React from "react";
// import { Link } from "react-router-dom";

const ProviderItem = ({ name, uri, image, ...props }) => {
  return (
    <ul className="provider">
      {/* <Link to="{url}"/> */}
      <li
        className="providerImage"
        style={{
          backgroundImage: `url(/static/${name}.jpg)`,
          width: 10,
          height: 10
        }}
      >
      </li>
      <li>{name}</li>
    </ul>
  );
};

export default ProviderItem;
