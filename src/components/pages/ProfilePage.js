import React from 'react';
// import WatchList from '../organisms/WatchList';
import AccountDetail from '../organisms/AccountDetail';
import MainTemplate from '../templates/MainTemplate';
import "./ProfilePage.css"

const ProfilePage = ({ profileDetail, handleLogin, handleLogout, loggedIn, getMovie, handleRemoveFromWishlist, ...props }) => {
    return (
        <div className="page-container">
            <MainTemplate handleLogin={handleLogin} handleLogout={handleLogout} loggedIn={loggedIn}>
                <AccountDetail accountDetail={profileDetail} handleRemoveFromWishlist={handleRemoveFromWishlist} />
            </MainTemplate>
        </div>
    )


}

export default ProfilePage;