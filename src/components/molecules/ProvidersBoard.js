import React from "react";
import ProviderItem from "../atoms/ProviderItem";
// import { Link } from "react-router-dom";
import "./ProviderBoard.css"

const ProviderBoard = (props) => {
  let providerList = [
    {
      "id": 8,
      "name": "Netflix",
      "url": "https://www.netflix.com/au/",
      "image": "http://popcorn-culture-api.herokuapp.com/media/providers/netflix.jpg",
      "relativeImage": "/static/netflix.jpg"
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
    <div className="ProviderBoard">
      {providerList.map((provider, index) => (
        <ProviderItem id={provider.id} key={index} name={provider.name} url={provider.url} image={provider.image} filterMovie={props.filterMovie} />
      ))}
    </div>
  );
};

export default ProviderBoard;
