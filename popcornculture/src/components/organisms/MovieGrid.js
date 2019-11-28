import React from "react";


const MovieGrid = (props) => {

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        {props.movies.map((movie, index) => (
          <div key={index}>
            <ul>
              <li>{movie.title}</li>
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

export default MovieGrid;

