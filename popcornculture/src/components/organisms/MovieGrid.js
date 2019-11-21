import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from "@material-ui/icons/Info";
// import MovieCard from "../molecules/MovieCard";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

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
        <input type={TextField} />
        <button>Get Data</button>
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

{
  /* <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Movies List</ListSubheader>
            </GridListTile
            {this.state.movies.map(movie => (
                <MovieCard image={movie.image} title = {movie.title} providers={movie.provider} />
            <GridListTile key={movie.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                subtitle={<span>released on: {tile.realease_date}</span>}
                actionIcon={
                    <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    >
                    <InfoIcon />
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList> */
}
