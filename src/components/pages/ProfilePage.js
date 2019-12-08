import React from 'react';
import WatchList from '../organisms/WatchList';
import AccountDetail from '../organisms/AccountDetail';
import MainTemplate from '../templates/MainTemplate';
const ProfilePage = ({ profileDetail, ...props }) => {
    return (
        <MainTemplate>
            <AccountDetail accountDetail={profileDetail} />
            <WatchList watchList={profileDetail} />
        </MainTemplate>

    )


}

export default ProfilePage;