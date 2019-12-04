import React from "react";
import PageTitles from "../atoms/PageTitles"
import "./MovieGrid.css"

const MovieGrid = (props) => {

  return (
    <div className="Content-Wrap">
      <PageTitles>Movie List</PageTitles>
      <div className="Grid">
        {props.movies.map((movie, index) => (
          <div className="MovieContainer"key={index}>
             <ul className="MovieDetails">
              <li>{movie.title}</li>
              <li>{movie.release_date}</li>
              <li>
          
                {movie.provider.map((item, index) => (
                  <div key={index}>
                    <ul className="MovieProvider">
                      {/* <Link to={item.url}> */}
                      <li className="ProviderItems">{item.name}</li>
                      {/* </Link> */}
                    </ul>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieGrid;

