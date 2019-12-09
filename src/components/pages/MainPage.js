import React from "react";
import BannerBoard from "../organisms/BannerBoard";
import FilterBoard from "../organisms/FilterBoard";
import MovieGrid from "../organisms/MovieGrid";
import "./Mainpage.css"
import MainTemplate from "../templates/MainTemplate";

const MainPage = ({ handleLogin, loggedIn, movies, providers, onSearch, ...props }) => {

  return (
    <div className="page-container">
      <MainTemplate handleLogin={handleLogin} loggedIn={loggedIn} >
        <BannerBoard onSearch={onSearch} />
        <FilterBoard providerList={providers} />
        <MovieGrid movies={movies} />
      </MainTemplate>

    </div>
  );
}
export default MainPage;
