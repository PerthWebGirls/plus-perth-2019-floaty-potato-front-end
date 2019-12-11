import React from "react";
import ChangeLayout from "../molecules/ChangeLayout";
import ProviderBoard from "../molecules/ProvidersBoard";
import ClearFilter from "../atoms/ClearFilter";
import "./FilterBoard.css"



export default function FilterBoard({ filterMovie, ...props }) {
  let providerList = [
    {
      "id": 8,
      "name": "Netflix",
      "url": "https://www.netflix.com/au/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/netflix.jpg"
    },
    {
      "id": 119,
      "name": "Amazon Prime Video",
      "url": "https://www.primevideo.com/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/prime.jpg"
    },
    {

      "id": 134,
      "name": "Foxtel Now",
      "url": "https://www.foxtel.com.au/foxtel-go.html",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/foxtel.jpg"
    },
    {
      "id": 135,
      "name": "ABC iview",
      "url": "https://iview.abc.net.au/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/iview.jpg"
    },
    {
      "id": 337,
      "name": "Disney Plus",
      "url": "https://www.disneyplus.com/en-au/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/disney.jpg"
    },
    {
      "id": 21,
      "name": "Stan",
      "url": "https://www.stan.com.au/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/no-img.png"
    },
    {
      "id": 82,
      "name": "tenplay",
      "url": "https://10play.com.au/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/ten.jpg"
    },
    {
      "id": 132,
      "name": "SBS On Demand",
      "url": "https://www.sbs.com.au/ondemand/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/sbs.jpg"
    }
  ]
  return (
    <>
      <hr className="RedDivider" />
      <div className="FilterBoard">
        <div>
          <h4 className="RefineTitle">Refine your Search</h4>
        </div>
        <div className="LayoutContainer"><ChangeLayout /></div>
        <div className="ProviderBoardContainer">

          <ProviderBoard providerList={providerList} filterMovie={filterMovie} />
          {/* <img src="/static/netflix.jpg" alt="netflix" className="ProviderIcon" />
            <img src="/static/stan.jpg" alt="stan" className="ProviderIcon" />
            <img src="/static/foxtel.jpg" alt="foxtel" className="ProviderIcon" />
            <img src="/static/disney.jpg" alt="disney" className="ProviderIcon" />
            <img src="/static/prime.jpg" alt="prime" className="ProviderIcon" />
            <img src="/static/iview.jpg" alt="iview" className="ProviderIcon" />
            <img src="/static/sbs.jpg" alt="sbs" className="ProviderIcon" />
            <img src="/static/ten.jpg" alt="ten" className="ProviderIcon" /> */}

        </div>
        <ClearFilter />
      </div>
    </>
  );
}
