import React from 'react';
import AppNav from "./organisms/AppNav";
import AppFooter from "./molecules/AppFooter";
import BannerBoard from "./organisms/BannerBoard";
import FilterBoard from "./organisms/FilterBoard";
import MovieGrid from "./organisms/MovieGrid";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () =>{
    return(
        <div>
            <AppNav/>
            <BannerBoard/>
            <FilterBoard/>
            <MovieGrid/>
            <AppFooter/>
        </div>
        

    )
}

export default MainPage;