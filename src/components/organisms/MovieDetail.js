import React from 'react';
import "./MovieDetail.css"
import { Link } from "react-router-dom";
import { withAlert } from 'react-alert'
import { useAlert } from 'react-alert'
import Button from "../atoms/Button"

const MovieDetail = ({ movieDetail, ...props }) => {
    const wishList = [];
    const alert = useAlert()
    const addToList = () => {
        if (wishList.includes(movieDetail)) {
            //show message info item already exist in your list
            alert.show('This movie already exist in your watch list');
        } else {
            //add item to the list and success message item added successfully
            wishList.push(movieDetail)
            alert.show('Movie has been added successfully to your watch list');
            console.log("wishlist", wishList);
        }

    };
    return (
        < div className="Content-Wrap">
            <div className="Cont">
                <div>
                    <img className="Poster" src={movieDetail.image} alt="" />
                </div>
                <div className="Detail-Wrap">
                    <div>
                        <h3>{movieDetail.title}</h3>
                    </div>
                    <div>
                        {(movieDetail.provider || []).map((item, index) => (
                            <div key={index}>
                                <ul>
                                    <Link to={item.url}>
                                        <li>{item.name}</li>
                                    </Link>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <Button className="WishListButton" onClick={addToList}>Add to watch list</Button>
                    <div>
                        <p>{movieDetail.summary}</p>
                        <h5>{movieDetail.duration}</h5>
                        <h5>{movieDetail.release_date}</h5>
                    </div>
                    <div>
                        {(movieDetail.genre || []).map((item, index) => (
                            <div key={index}>
                                <ul>
                                    <li>{item.name}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        {(movieDetail.classification || {}).text}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default withAlert()(MovieDetail);