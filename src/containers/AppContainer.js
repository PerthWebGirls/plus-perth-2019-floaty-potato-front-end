import React, { Component } from "react";
import { Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import MainPage from "../components/pages/MainPage";
import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";
import MovieDetailPage from "../components/pages/MovieDetailPage";
import ProfilePage from "../components/pages/ProfilePage"
import { withAlert } from 'react-alert'
import { useAlert } from 'react-alert'
const API_URL = process.env.REACT_APP_API_URL;

class AppContainer extends Component {

  "----------"
  //initialize the states
  "----------"
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
      loggedIn: localStorage.getItem('token') ? true : false,
      username: '',
      email: '',
      userId: localStorage.getItem('userId'),
      profileDetail: [],
      history: "",
      alert: ""
    };
    this.getProfileDetail = this.getProfileDetail.bind(this)
  }

  "----------"
  //Gets all movie details to display in home page
  "----------"
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

  "----------"
  //Returns all Providers 
  "----------"
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
  "----------"
  //Search functionality
  "----------"
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
  "----------"
  //Filter by Provider id
  "----------"
  filterMovie = (providerId) => {
    this.setState({ loading: true })
    console.log(providerId)
    fetch(`${API_URL}/movies/?provider=${providerId}`)
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




  "----------"
  //Get user Profile
  "----------"
  getProfileDetail(id) {
    fetch(`${API_URL}/profiles/${id}/`)
      .then(response => response.json())
      .then(response => {
        this.setState({ profileDetail: response });
      })

  }

  "----------"
  //Chech user Authenticated
  "----------"
  checkUserAuthenticated() {
    if (this.state.loggedIn) {
      fetch(`${API_URL}/users/${this.state.userId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState(
            {
              username: json.user
            }

          );
        })
        .then(() => {
          this.getProfileDetail(this.state.userId);
        })

    }
    else {
      this.setState({ errorMessage: "user hasn't logged in yet" })
    }
  }

  "----------"
  //Add movie to user Profile-watch list
  "----------"

  handleAddToWishlist = async (movieId) => {
    // const alert = useAlert()
    if (this.state.loggedIn) {
      let list = this.state.profileDetail.watchlist;
      if (!list.includes(movieId)) {
        fetch(`${API_URL}/profiles/${this.state.userId}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },

          body: JSON.stringify({
            watchlist: [...list, movieId]
          })
        }).then((res) => {
          console.log(res.status)
          if (res.status < 400) {
            this.setState({
              profileDetail: {
                ...this.state.profileDetail,
                watchlist: [...list, movieId]
              }
            })
          }
          else {
            alert("oops! something went wrong")
          }
        }).catch(() => {
          alert('show alert here sth went wrong as well')
        })
      } else {
        alert("Movie already exist in your watch list")
      }
    } else {
      alert("you need to login/sign up first");
    }
  }

  "----------"
  //Remove Movie from profile watch list
  "----------"
  handleRemoveFromWishlist = async (movieId) => {
    const alert = useAlert();
    if (this.state.loggedIn) {
      let list = this.state.profileDetail.watchlist;
      if (list) {
        let newList = list.filter(item => item !== movieId);
        fetch(`${API_URL}/profiles/${this.state.userId}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },

          body: JSON.stringify({
            watchlist: [...newList]
          })
        }).then((res) => {
          console.log(res.status)
          if (res.status < 400) {
            this.setState({
              profileDetail: {
                ...this.state.profileDetail,
                watchlist: [...newList]
              }
            })
          }
          else {
            alert("oops! something went wrong")
          }
        }).catch(() => {
          alert('oops!!! something went wrong')
        })
      } else {
        alert("You don't have any movie in your list")
      }
    }
  }

  "----------"
  //Login to App
  "----------"
  handleLogin = (e, data, onSuccess) => {
    e.preventDefault();
    fetch(`${API_URL}/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    })
      .then(res => res.json())
      .then(json => {
        console.log(localStorage.setItem('token', json.access));
        const token = json.access;
        console.log(token);
        let userId = null;
        try {
          userId = JSON.parse(atob(token.split('.')[1])).user_id;
          localStorage.setItem('userId', userId)
        } catch (e) {
          console.warn('There was exception while parsing token')
        }
        this.setState({
          loggedIn: true,
          username: json.user,
          // userId: json.id,
          userId: userId,
          email: json.email,
        });
        console.log(this.state.userId);
        console.log("is logged in:", this.state.loggedIn);

        return userId;
      }).then((userId) => {
        this.getProfileDetail(userId)
      }).then(() => {
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      })

  };


  "----------"
  //Sign up 
  "----------"
  handleSignup = (e, data, onSuccess, onFailure) => {
    console.log("user posted  data", data);
    e.preventDefault();
    fetch(`${API_URL}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          username: data.username,
          password: data.password,
          email: data.email,
          profile: {}
        })
    })
      .then((res) => {
        if (res.status >= 400) {
          // TODO: refactor tomorrow
          res.json().then((err) => onFailure(err));
          throw new Error('There was an issue while signing up');
        }
        return res.json();
      })
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          loggedIn: false,
          username: json.user,
          userId: json.id,
          email: json.email,
        });

        if (typeof onSuccess === 'function') {
          onSuccess();
          alert("please check your email to activate your account.")
        }
      }).catch(() => {

      })
  };


  "----------"
  //Log out from App
  "----------"
  handleLogout = () => {
    console.log('logging out...')
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.setState({ loggedIn: false, username: '' });
  };


  componentDidMount() {
    this.fetchApiData();
    this.getProviders();
    this.checkUserAuthenticated();

  }
  componentWillUnmount() {
    // Remember state for the next mount


  }


  render() {
    return (
      <>
        <Route path="/" render={() => {
          return (
            <>
              <MainPage
                movies={this.state.movies}
                onSearch={this.searchMovie}
                providers={this.state.providers}
                loggedIn={this.state.loggedIn}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                filterMovie={this.filterMovie}

              />
              <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
        <Route path="/Login" render={() => {
          return (
            <>
              <LoginPage handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}
              />
              <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
        <Route path="/Signup" render={() => {
          return (
            <>
              <SignupPage handle_signup={this.handleSignup} loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}
              />
              <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            </>
          );
        }}
          exact
        />
        <Route path="/details/:key" render={() => {
          return (
            <MovieDetailPage
              profileDetail={this.state.profileDetail}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedIn={this.state.loggedIn}
              handleSignup={this.handleSignup}
              handleAddToWishlist={this.handleAddToWishlist}

            >
            </MovieDetailPage>
          )
        }}
          exact
        />
        <Route path="/profile" render={() => {
          return (
            <>
              <ProfilePage
                profileDetail={this.state.profileDetail}
                loggedIn={this.state.loggedIn}
                handleLogout={this.handleLogout}
                handleLogin={this.handleLogin}
                handleRemoveFromWishlist={this.handleRemoveFromWishlist}
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

export default withAlert()(AppContainer);