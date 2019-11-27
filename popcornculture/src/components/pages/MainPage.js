import React from "react";
// import "./MainPage.css";
import NavBar from "../molecules/NavBar";
import AppFooter from "../molecules/AppFooter";
import BannerBoard from "../organisms/BannerBoard";
import FilterBoard from "../organisms/FilterBoard";
import MovieGrid from "../organisms/MovieGrid";


const MainPage = ({ movies, ...props }) => {

  return (
    <div className="App">
      <NavBar />
      <BannerBoard />
      <FilterBoard />
      <MovieGrid movies={movies} nadiasProperty="something" />
      < AppFooter />
    </div>
  );
}
export default MainPage;
