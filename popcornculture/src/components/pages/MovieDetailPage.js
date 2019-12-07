import React from 'react';
import { withRouter } from 'react-router';
import NavBar from "../molecules/NavBar"
import Footer from "../organisms/Footer"
import MovieDetail from "../organisms/MovieDetail"

class MovieDetailPage extends React.Component {
    state = { movieDetail: [] };


    constructor(props) {
        super(props);

        this.getMovieDetail = this.getMovieDetail.bind(this);
        console.log(props);
        const movieIndex = props.match.params.key;

        this.getMovieDetail(Number(movieIndex)+1);
    }


    getMovieDetail(movieIndex) {
        console.log("movieIndex", movieIndex)
        return fetch(`http://localhost:8000/api/movies/${movieIndex}`)
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