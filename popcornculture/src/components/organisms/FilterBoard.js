import React from "react";
import ChangeLayout from "../molecules/ChangeLayout";
import ProviderBoard from "../molecules/ProvidersBoard";
import ClearFilter from "../atoms/ClearFilter";

export default function FilterBoard() {
  return (
    <div>
      <div>
        <span>Refine your Search:</span>
      </div>
      <ChangeLayout />
      <ProviderBoard />
      <ClearFilter />
    </div>
  );
}
