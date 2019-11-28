import React, { Component } from "react";
import { Route } from 'react-router-dom';
import MainPage from "../components/pages/MainPage";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading : true,
      errorMessage: "",
      searchValue :""
    };
  }

  
  fetchApiData(){
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
    
  searchMovie = (searchValue) =>{  
    this.setState({loading: true})
    fetch(`http://localhost:8000/api/movies/?s=${searchValue}`)
    .then(response => response.json())
    .then(jsonResponse => {
      this.setState({movies: jsonResponse.results });
      this.setState({loading :false});
      console.log('resp', jsonResponse)
    })
    .catch(err => {
        console.log('error was', err.message);
        this.setState({movies: []});
        this.setState({errorMessage: err.message});
        this.setState({loading :false});
      });
      
    }
  
  componentDidMount() {
    this.fetchApiData();
  }

    
  render() {
    return (
      <>
        <Route path="/" component={() => {
          return (
            <>
              <MainPage
                movies={this.state.movies}
                onSearch={this.searchMovie}
              />
              <div style={{color: 'red'}}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
      </>
    );
  }
}

export default AppContainer;