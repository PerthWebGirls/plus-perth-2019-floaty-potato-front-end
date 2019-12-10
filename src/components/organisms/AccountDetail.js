import React from 'react';
import Button from '../atoms/Button';

const AccountDetail = ({ accountDetail, ...props }) => {
    return (
        <div className="Content-Wrap">
            <div>
                <h3>Welcome back {accountDetail.user}</h3>
            </div>
            <div>
                <img src={accountDetail.avatar} alt={accountDetail.user} />
            </div>
            <div>
                <p>My preffered genre:</p>
                <ul>
                    {accountDetail.preferred_genres.map((genre, index) => (
                        <li key={index}> {genre}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Providers I follow:</p>
                <ul>
                    {accountDetail.preferred_providers.map((provider, index) => (
                        <li key={index}> {provider}</li>
                    ))}
                </ul>

            </div>
            <Button onButtonClick="">Edit</Button>
        </div>
    );
}
export default AccountDetail;