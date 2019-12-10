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
    }

    componentDidMount() {
        console.log("props is ", this.props);
        const movieId = this.props.match.params.key;
        this.getMovieDetail(movieId);
    }
    getMovieDetail(movieId) {
        console.log("movieIndex", movieId)

        return fetch(`${API_URL}/movies/${movieId}`)
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



    render() {
        console.log("MovieDetail_2", this.state.movieDetail);
        return (<div className="page-container">
            <MainTemplate loggedIn={this.props.loggedIn} handleLogout={this.props.handleLogout} handleLogin={this.props.handleLogin}>
                <AlertProvider template={AlertTemplate} {...this.options}>
                    <MovieDetail movieDetail={this.state.movieDetail} handleAddToWishlist={this.props.handleAddToWishlist} />
                </AlertProvider>
            </MainTemplate>
        </div>);
    }
}

export default withRouter(MovieDetailPage);
