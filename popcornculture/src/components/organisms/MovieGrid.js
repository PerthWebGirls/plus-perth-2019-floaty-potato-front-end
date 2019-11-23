import React, { Component } from "react";

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    fetch("http://localhost:8000/api/movies/")
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results });
        console.log(this.state.movies);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClick = (e, data) => {
    // access to e.target here
    console.log("data");
  };
  render() {
    // const classes = useStyles();
    return (
      <div>
        <h1>Movie List</h1>
        <div>
          {this.state.movies.map((movie, index) => (
            <div key={movie.title}>
              <ul>
                <li>{movie.title}</li>
                <li>{movie.release_date}</li>
                <li>
                  {movie.provider.map((item, index) => (
                    <div key={item.name}>
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
    );
  }
}

export default MovieGrid;
