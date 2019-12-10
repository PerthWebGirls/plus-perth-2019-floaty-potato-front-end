import React from 'react';
import { withRouter } from 'react-router';
import MovieDetail from "../organisms/MovieDetail"
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import MainTemplate from '../templates/MainTemplate';
import "./MovieDetailPage.css"

const API_URL = process.env.REACT_APP_API_URL;

class MovieDetailPage extends React.Component {
    state = {
        movieDetail: [],
        loggedIn: localStorage.getItem('token') ? true : false,

    };
    options = {
        // you can also just use 'bottom center'
        position: positions.TOP_CENTER,
        timeout: 3000,
        offset: '30px',
        type: types.INFO,
        // you can also just use 'scale'
        transition: transitions.FADE
    }

    constructor(props) {
        super(props);

        this.getMovieDetail = this.getMovieDetail.bind(this);
        console.log("props is ", props);
        const movieIndex = props.match.params.key;
        this.getMovieDetail(Number(movieIndex) + 1);


    }
    getMovieDetail(movieIndex) {
        console.log("movieIndex", movieIndex)

        return fetch(`${API_URL}/movies/${movieIndex}`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                this.setState({ movieDetail: data });
                console.log("MovieDetail_1", data);
                return data;
            })
            .catch(err => {
                this.setState({ movieDetail: [] });
                this.setState({ errorMessage: err.message });
            })

    }
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
                console.log(json);
                console.log(localStorage.setItem('token', json.access));
                if (this._isMounted) {

                    this.setState({
                        loggedIn: true,
                        username: json.username,
                        userId: json.id,
                        email: json.email,
                    });
                }
                console.log("is logged in:", this.state.loggedIn);
                if (typeof onSuccess === 'function') {
                    onSuccess();
                }
            });

    };

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
                    loggedIn: true,
                    username: json.username,
                    userId: json.id,
                    email: json.email,
                });

                if (typeof onSuccess === 'function') {
                    onSuccess();
                }
            }).catch(() => {

            })
    };

    handleLogout = () => {
        console.log('logging out...')
        localStorage.removeItem('token');
        this.setState({ loggedIn: false, username: '' });
    };


    render() {
        console.log("MovieDetail_2", this.state.movieDetail);
        return (<div className="page-container">
            <MainTemplate loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} handleLogin={this.handleLogin} >
                <AlertProvider template={AlertTemplate} {...this.options}>
                    <MovieDetail movieDetail={this.state.movieDetail} />
                </AlertProvider>
            </MainTemplate>
        </div>);
    }
}

export default withRouter(MovieDetailPage);