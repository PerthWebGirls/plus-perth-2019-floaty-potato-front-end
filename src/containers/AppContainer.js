import React, { Component } from "react";
import { Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";
import MovieDetailPage from "../components/pages/MovieDetailPage";
import ProfilePage from "../components/pages/ProfilePage"

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
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      email: '',
      profileDetail: [],
      userId: "",


    };
  }


  fetchApiData() {
    fetch(`${API_URL}/movies/`)
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
    fetch(`${API_URL}/providers/`)
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
    fetch(`${API_URL}/movies/?search=${searchValue}`)
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

  getProfileDetail({ userId }) {
    fetch(`${API_URL}/profiles/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ profileDetail: data.results });
      })
  }

  checkUserAuthenticated() {
    if (this.state.logged_in) {
      fetch(`${API_URL}/users/${this.state.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState(
            {
              username: json.username,
              email: json.email,
            }

          );
        });
    }
    else {
      this.setState({ errorMessage: "user hasn't logged in yet" })
    }
  }

  handle_login = (e, data, onSuccess) => {
    e.preventDefault();
    fetch(`${API_URL}/token/`, {
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
          username: json.username,
          userId: json.id,
          email: json.email,
        });
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      });
  };

  handle_signup = (e, data, onSuccess) => {
    console.log("user posted  data", data);
    e.preventDefault();
    fetch(`${API_URL}/users/`, {
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
          username: json.username,
          userId: json.id,
          email: json.email
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
    this.checkUserAuthenticated();

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
                logged_in={this.state.logged_in}
                handle_logout={this.handle_logout}

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



        <Route path="/profile" component={() => {
          return (
            <>
              <ProfilePage
                profileDetail={this.state.profileDetail}
                logged_in={this.state.logged_in}
                handle_logout={this.handle_logout}

              />
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