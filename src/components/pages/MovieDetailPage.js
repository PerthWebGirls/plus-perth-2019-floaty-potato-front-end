import React from 'react';
import { withRouter } from 'react-router';
import NavBar from "../molecules/NavBar"
import Footer from "../organisms/Footer"
import MovieDetail from "../organisms/MovieDetail"
import "./MovieDetailPage.css"

const API_URL = process.env.REACT_APP_API_URL;

class MovieDetailPage extends React.Component {
    state = { movieDetail: [] };


    constructor(props) {
        super(props);

        this.getMovieDetail = this.getMovieDetail.bind(this);
        console.log("props is ", props);
        const movieIndex = props.match.params.key;
        // const movieIndex = this.state.movieDetail.id;
        this.getMovieDetail(Number(movieIndex) + 1);
        // this.getMovieDetail(movieIndex);
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

    render() {
        console.log("MovieDetail_2", this.state.movieDetail);
        return (<div className="page-container">
            <NavBar />
            <MovieDetail movieDetail={this.state.movieDetail} />
            <Footer />
        </div>);
    }
}

export default withRouter(MovieDetailPage);