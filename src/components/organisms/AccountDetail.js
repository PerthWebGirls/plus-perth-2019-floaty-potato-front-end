import React from 'react';
import Button from '../atoms/Button';
import { Link } from "react-router-dom";

const AccountDetail = ({ accountDetail, ...props }) => {
    return (
        <>
            <div>
                <h3>Welcome back {accountDetail.user}</h3>
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
                    {this.props.accountDetail.watchlist || [].map((item, index) => (
                        <li key={index}>{item}
                            <Button onButtonClick="">Remove</Button>
                        </li>
                    ))}

                </ul>
            </div>
            <Link to="/">
                <Button>Browse Movies</Button>
            </Link>
        </>
    );
}
export default AccountDetail;