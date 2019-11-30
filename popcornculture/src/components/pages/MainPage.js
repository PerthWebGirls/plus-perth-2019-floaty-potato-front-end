import React from "react";
// import "./MainPage.css";
import NavBar from "../molecules/NavBar";
import Footer from "../organisms/Footer";
import BannerBoard from "../organisms/BannerBoard";
import FilterBoard from "../organisms/FilterBoard";
import MovieGrid from "../organisms/MovieGrid";


const MainPage = ({ movies, onSearch, ...props }) => {

  return (
    <div className="App">
      <NavBar />
      <BannerBoard onSearch={onSearch} />
      <FilterBoard />
      <MovieGrid movies={movies} />
      <Footer />
    </div>
  );
}
export default MainPage;
