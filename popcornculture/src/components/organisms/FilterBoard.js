import React from "react";
import ChangeLayout from "../molecules/ChangeLayout";
import ProviderBoard from "../molecules/ProvidersBoard";
import ClearFilter from "../atoms/ClearFilter";
import "./FilterBoard.css"

export default function FilterBoard({ providerList, ...props }) {
  return (
    <div className ="FilterBoard">
      <div>
        <h4>Refine your Search:</h4>
      </div>
      <ChangeLayout />
      <ProviderBoard providerList={providerList} />
      <ClearFilter />
    </div>
  );
}
