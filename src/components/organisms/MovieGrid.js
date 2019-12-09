import React, { Component } from 'react';
import PageTitles from "../atoms/PageTitles"
import "./MovieGrid.css"
import { Link } from "react-router-dom";


// const imageStyle = {
//   height: 200,
//   width: 150,
// };
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
            <div className="MovieContainer" key={index}>
              
                < Link to={`/details/${index}`}>
                  <img className="PosterGrid" src={movie.image} alt="movie thumbnail" />

                </Link>
                {/* <ul className="MovieDetails"> */}
                {/* < Link to={`/details/${index}`}>
                  <li>{movie.title}</li>
                </Link>
                <li>{movie.release_date}</li> */}
                <li className="MovieProvider">
                  {movie.provider.map((item, index) => (
                      <ul key={index}>
                        {/* <Link to={item.url}> */}
                        <li className="ProviderItems">{item.name}</li>
                        {/* </Link> */}
                      </ul>
                  ))}
                </li>
              {/* </ul> */}
            </div>
          ))}
        </div>
      </div>
    )
  }
};

export default MovieGrid;

