import React from 'react';
import WatchList from '../organisms/WatchList';
import AccountDetail from '../organisms/AccountDetail';
import MainTemplate from '../templates/MainTemplate';
const ProfilePage = ({ profileDetail, handleLogin, handleLogout, loggedIn, ...props }) => {
    return (
        <MainTemplate handleLogin={handleLogin} handleLogout={handleLogout} loggedIn={loggedIn}>
            <AccountDetail accountDetail={profileDetail} />
            <WatchList watchList={profileDetail} />
        </MainTemplate>

    )


}

export default ProfilePage;