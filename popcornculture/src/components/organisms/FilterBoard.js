import React from "react";
import ChangeLayout from "../molecules/ChangeLayout";
import ProviderBoard from "../molecules/ProvidersBoard";
import ClearFilter from "../atoms/ClearFilter";

export default function FilterBoard() {
  return (
    <div>
      <div>
        <h4>Refine your Search:</h4>
      </div>
      <ChangeLayout />
      <ProviderBoard />
      <ClearFilter />
    </div>
  );
}
