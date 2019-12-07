import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";
import MovieDetailPage from "../components/pages/MovieDetailPage";

const API_URL = process.env.REACT_APP_API_URL;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      providers: [],
      movieIndex: "",
      movieDetail: [],
      loading: true,
      errorMessage: "",
      searchValue: "",
      displayed_form: "",
      logged_in: localStorage.getItem('token') ? true : false,
      username: "",

    };
  }


  fetchApiData() {
    fetch("{API_URL}/api/movies/")
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results });
        console.log(this.state.movies);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProviders() {
    fetch("{API_URL}/api/providers/")
      .then(response => response.json())
      .then(data => {
        this.setState({ providers: data.results })
        console.log(this.state.providers);
      })
      .catch(err => {
        console.log(err);
      });

  }

  searchMovie = (searchValue) => {
    this.setState({ loading: true })
    console.log(searchValue)
    fetch(`{API_URL}/api/movies/?search=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.results });
        this.setState({ loading: false });
        console.log('resp', data)
      })
      .catch(err => {
        console.log('error was', err.message);
        this.setState({ movies: [] });
        this.setState({ errorMessage: err.message });
        this.setState({ loading: false });
      });

  }




  handle_login = (e, data, onSuccess) => {
    e.preventDefault();
    fetch('{API_URL}/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        localStorage.setItem('token', json.access);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: '' // json.user.username
        });
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      });
  };

  handle_signup = (e, data, onSuccess) => {
    e.preventDefault();
    fetch('{API_URL}/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };


  componentDidMount() {
    this.fetchApiData();
    this.getProviders();


    if (this.state.logged_in) {
      fetch('{API_URL}/api/users/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
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
                providers={this.state.providers}

              />
              <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
        <Route path="/Login" component={() => {
          return (
            <>
              <LoginPage handle_login={this.handle_login}
              />
              <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
        <Route path="/Signup" component={() => {
          return (
            <>
              <SignupPage handle_signup={this.handle_signup}
              />
              <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
        <Route path="/details/:key" component={MovieDetailPage}
          exact
        />
      </>
    );
  }
}

export default AppContainer;