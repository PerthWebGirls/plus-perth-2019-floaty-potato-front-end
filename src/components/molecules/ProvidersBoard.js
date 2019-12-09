import React from "react";
import ProviderItem from "../atoms/ProviderItem";
// import { Link } from "react-router-dom";
import "./ProviderBoard.css"

const ProviderBoard = (props) => {
    return (
      <div className="ProviderBoard">
          {props.providerList.map((provider, index) => (
          <ProviderItem key={index} name={provider.name} url={provider.url} image={provider.image} />
        ))}
      </div>
    );
};

export default ProviderBoard;
