import React from 'react';

import Footer from "../organisms/Footer";
import NavBar from '../molecules/NavBar';

const MainTemplate = ({ logged_in, handle_logout, ...props }) => {
    return (
        <div >
            <NavBar isLoggedIn={logged_in} handleLogout={handle_logout}
            />
            {props.children}
            <Footer />
        </div>

    );
}

export default MainTemplate;