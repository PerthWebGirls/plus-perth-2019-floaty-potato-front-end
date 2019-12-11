import React from "react";
import ChangeLayout from "../molecules/ChangeLayout";
// import ProviderBoard from "../molecules/ProvidersBoard";
import ClearFilter from "../atoms/ClearFilter";
import "./FilterBoard.css"

export default function FilterBoard({ providerList, filterMovie, ...props }) {
  return (
    <>
      <hr className="RedDivider" />
      <div className="FilterBoard">
        <div>
          <h4 className="RefineTitle">Refine your Search</h4>
        </div>
        <div className="LayoutContainer"><ChangeLayout /></div>
        <div className="ProviderBoardContainer">
          <div className="ProviderBoard">
            {/* <ProviderBoard providerList={providerList} /> */}
            <img src="/static/netflix.jpg" alt="netflix" className="ProviderIcon" />
            <img src="/static/stan.jpg" alt="stan" className="ProviderIcon" />
            <img src="/static/foxtel.jpg" alt="foxtel" className="ProviderIcon" />
            <img src="/static/disney.jpg" alt="disney" className="ProviderIcon" />
            <img src="/static/prime.jpg" alt="prime" className="ProviderIcon" />
            <img src="/static/iview.jpg" alt="iview" className="ProviderIcon" />
            <img src="/static/sbs.jpg" alt="sbs" className="ProviderIcon" />
            <img src="/static/ten.jpg" alt="ten" className="ProviderIcon" />
          </div>
        </div>
        <ClearFilter />
      </div>
    </>
  );
}
