import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import { Link } from "react-router-dom";
// import { promised } from 'q';


const AccountDetail = ({ accountDetail, ...props }) => {
    const API_URL = process.env.REACT_APP_API_URL;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log('accountdetails is', accountDetail.watchlist);
        if (accountDetail.watchlist) {
            console.log('fetching movies with ids: ', accountDetail.watchlist);
            const promises = accountDetail.watchlist.map((movieId) =>
                fetch(`${API_URL}/movies/${movieId}`)
                    .then(response => response.json())
            );
            Promise.all(promises).then((fetchedMovies) => {
                console.log('fetched movies: ', fetchedMovies);
                setMovies(fetchedMovies);
            });
        }
    }, [API_URL, accountDetail.watchlist]);
    // can you share the console now?
    return (
        <div className="Content-Wrap">
            <div>
                <h3>Welcome back "{accountDetail.user}"</h3>
            </div>
            <div>
                <img src={accountDetail.avatar} alt={accountDetail.user} />
            </div>
            <div>
                <p>My preffered genre:</p>
                <ul>
                    {accountDetail.preferred_genres || [].map((genre, index) => (
                        <li key={index}> {genre}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Providers I follow:</p>
                <ul>
                    {accountDetail.preferred_providers || [].map((provider, index) => (
                        <li key={index}> {provider}</li>
                    ))}
                </ul>

            </div>
            <Button onButtonClick="">Edit</Button>
            <div>
                <ul>

                    {
                        movies.map((movie) =>
                            <li key={movie.id}>{movie.title}
                                <Link to={`/details/${movie.id}`}>
                                    <img src={movie.image} alt="movie thumbnail" />
                                </Link>
                                < Button onButtonClick={() => props.handleRemoveFromWishlist(movie.id)} > Remove</Button>
                            </li>)
                    }
                </ul>
                <Link to="/">
                    <Button>Browse Movies</Button>
                </Link>
            </div>
        </div>
    );
}
export default AccountDetail;