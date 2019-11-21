import React, { Component } from "react";
import ProviderItem from "./atoms/ProviderItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function MovieCard({movie}) {
  const classes = useStyles();
  const poster =
  movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie Poster"
          height="140"
          image= "{poster}"
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ul>
          {movie.providers.map(provider => <li>ProviderItem</li>)}
        </ul>
        <Button size="small" color="primary">
          <Link to= "/Details">Read More...</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
