import React from 'react';
import "./MovieDetail.css"
import { withAlert } from 'react-alert'
// import { useAlert } from 'react-alert'


const MovieDetail = ({ movieDetail, profileDetail, ...props }) => {

    // const alert = useAlert()
    // const addToList = () => {
    //     if (profileDetail.wishList.includes(movieDetail)) {
    //         //show message info item already exist in your list
    //         alert.show('This movie already exist in your watch list');
    //     } else {
    //         //add item to the list and success message item added successfully
    //         profileDetail.wishList.push(movieDetail)
    //         alert.show('Movie has been added successfully to your watch list');
    //         console.log("wishlist", wishList);
    //     }
    // };
    return (
        < div className="Content-Wrap">
            <div className="Cont">
                <div>
                    <img className="Poster" src={movieDetail.image} alt="" />
                </div>
                <div className="Detail-Wrap">
                    <div>
                        <h3>{movieDetail.title} ({(movieDetail.classification || {}).text})</h3>
                    </div>
                    <div className="ProviderDetails">
                        {(movieDetail.provider || []).map((item, index) => (
                            <div key={index}>
                                <ul className="ProviderList">
                                    <a href={item.url} target="blank">{item.name}</a>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="WatchListButtonContainer">

                        <button className="WatchListButton" onClick={() => props.handleAddToWishlist(movieDetail.id)}>Add to watch list</button>
                    </div>

                    <div className="MovieDetail">
                        <p>{movieDetail.summary}</p>
                        <h5>DURATION: {movieDetail.duration}</h5>
                        <h5>RELEASE: {movieDetail.release_date}</h5>
                    </div>
                    <div className="MovieGenre">
                        {(movieDetail.genre || []).map((item, index) => (
                            <div key={index}>
                                <ul>
                                    <li>{item.name}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default withAlert()(MovieDetail);