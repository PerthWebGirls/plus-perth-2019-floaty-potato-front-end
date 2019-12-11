import React from "react";
// import { Link } from "react-router-dom";

const ProviderItem = ({ id, filterMovie, name, url, image, ...props }) => {
  let images = [
    <img src="/static/netflix.jpg" alt="netflix" className="ProviderIcon" />,
    <img src="/static/stan.jpg" alt="stan" className="ProviderIcon" />,
    <img src="/static/foxtel.jpg" alt="foxtel" className="ProviderIcon" />,
    <img src="/static/disney.jpg" alt="disney" className="ProviderIcon" />,
    <img src="/static/prime.jpg" alt="prime" className="ProviderIcon" />,
    <img src="/static/iview.jpg" alt="iview" className="ProviderIcon" />,
    <img src="/static/sbs.jpg" alt="sbs" className="ProviderIcon" />,
    <img src="/static/ten.jpg" alt="ten" className="ProviderIcon" />

  ]
  return (
    <ul className="provider">
      {/* <Link to="{url}"/> */}
      <li
        className="providerImage"
        style={{
          backgroundImage: { image },
          width: 10,
          height: 10
        }}
      >
        <div className="">

          <img src={image} onClick={() => filterMovie(id)} className="ProviderIcon" ></img>
        </div>
      </li>



    </ul>
  );
};

export default ProviderItem;
