import React, { Component } from "react";
import ProviderItem from "./atoms/ProviderItem";
import { Link } from "react-router-dom";

const ProviderBeard = (providers, ...props) => {
  {
    return (
      <div>
        <ul>
          {providers.map(item => (
            <Link to="/${item.url}">
              <ProviderItem image={item.image}></ProviderItem>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
};

export default ProviderBeard;
