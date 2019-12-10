import React from 'react';
import Button from '../atoms/Button';
// import Button from '../atoms/Button';
import { Link } from "react-router-dom";
const WatchList = ({ profileDetail, ...props }) => {
    return (
        <div className="Content-Wrap">
            <div>
                <ul>
                    {this.props.profileDetail.watchlist.map((item, index) => (
                        <li key={index}>{item}
                            <Button onButtonClick="">Remove</Button>
                        </li>
                    ))}

                </ul>
            </div>
            <Link to="/">
                <Button>Browse Movies</Button>
            </Link>
        </div>
    )

}
export default WatchList;