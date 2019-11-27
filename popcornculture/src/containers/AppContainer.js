import React, { Component } from "react";
import { Route } from 'react-router-dom';
import MainPage from "../components/pages/MainPage";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
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
    return (
      <>
        <Route path="/" component={() => {
          return (
            <MainPage
              movies={this.state.movies}
            />
          );
        }}
          exact
        />
      </>
    );
  }
}

export default AppContainer;
