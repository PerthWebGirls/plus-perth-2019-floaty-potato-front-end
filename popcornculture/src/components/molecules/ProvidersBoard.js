import React from "react";
import ProviderItem from "../atoms/ProviderItem";
// import { Link } from "react-router-dom";

const Providers = [
  { name: "Stan", url: "" },
  { name: "Prime Video", url: "" },
  { name: "Netflix", url: "" },
  { name: "Foxtel Now", url: "" },
  { name: "Disney+", url: "" }
];
const ProviderBoard = (providers, ...props) => {
  {
    return (
      <div>
        <ul>
          {Providers.map((item, index) => (
            <ProviderItem key={index} name={item.name} url={item.url} />
          ))}
        </ul>
      </div>
    );
  }
};

export default ProviderBoard;
