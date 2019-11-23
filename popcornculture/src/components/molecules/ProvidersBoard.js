import React from "react";
import ProviderItem from "../atoms/ProviderItem";
// import { Link } from "react-router-dom";

const ProviderBoard = (providers, ...props) => {
  const Providers = [
    { name: "Stan", url: "" },
    { name: "Prime Video", url: "" },
    { name: "Netflix", url: "" },
    { name: "Foxtel Now", url: "" },
    { name: "Disney+", url: "" }
  ];
  {
    return (
      <div>
        <ul>
          {Providers.map(item => (
            <ProviderItem name={item.name} url={item.url} />
          ))}
        </ul>
      </div>
    );
  }
};

export default ProviderBoard;
