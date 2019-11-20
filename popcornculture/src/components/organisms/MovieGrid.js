import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import MovieCard from "../molecules/MovieCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

class MovieGrid extends Component { 
    constructor(props) {
        super(props);
        this.state = {
         movies: []     
        }
    };
       
    componentWillMount() {
            fetch('/api/movies')
              .then(res => res.json())
              .then((data) => {
                this.setState({ movies: data })
                console.log(this.state.movies)
                })
                .catch(err => {
                    console.log(err);
                  })
    }    
    
    render(){
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <h1>Movie List</h1>
        <GridList cellHeight={180} className={classes.gridList}>
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
        </GridList>
    </div>
  );
}
}


export default MovieGrid;