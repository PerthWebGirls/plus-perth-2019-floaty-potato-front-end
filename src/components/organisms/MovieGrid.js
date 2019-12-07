import React, { Component } from 'react';
import PageTitles from "../atoms/PageTitles"
import "./MovieGrid.css"
import { Link } from "react-router-dom";

class MovieGrid extends Component {
  state = {
    movieIndex: '',
  }
  render() {
    return (
      <div className="Content-Wrap"  >
        <PageTitles>Movie List</PageTitles>
        <div className="Grid">
          {this.props.movies.map((movie, index) => (
            <div  className="MovieContainer" key={index}>
              <ul className="MovieDetails">
                < Link to={`/details/${index}`}>
                  <li>{movie.image}</li>
                </Link>
                < Link to={`/details/${index}`}>
                  <li>{movie.title}</li>
                </Link>
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
};

export default MovieGrid;

