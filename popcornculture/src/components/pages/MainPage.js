import React from "react";
// import "./MainPage.css";
import NavBar from "../molecules/NavBar";
import AppFooter from "../molecules/AppFooter";
import BannerBoard from "../organisms/BannerBoard";
import FilterBoard from "../organisms/FilterBoard";


const MainPage = ({ movies }) => {
  return (
    <div className="App">
      <NavBar />
      <BannerBoard />
      <FilterBoard />
      <AppFooter />
    </div>
  );
}
export default MainPage;
