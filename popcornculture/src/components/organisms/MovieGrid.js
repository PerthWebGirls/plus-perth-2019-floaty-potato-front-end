import React, { Component } from 'react';
import "./MovieGrid.css"
import { Link } from "react-router-dom";

class MovieGrid extends Component {
  state = {
    movieIndex: '',
  }

  // handleClick(event) {

  //   this.setState({ movieIndex: event.target.getAttribute('key') })
  //   console.log("movie index", this.state.movieIndex);


  // }

  render() {
    return (
      <div className="Content-Wrap"  >
        <h1>Movie List</h1>
        <div>
          {this.props.movies.map((movie, index) => (
            <div key={index}>
              <ul>
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
                      <ul>
                        {/* <Link to={item.url}> */}
                        <li>{item.name}</li>
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

