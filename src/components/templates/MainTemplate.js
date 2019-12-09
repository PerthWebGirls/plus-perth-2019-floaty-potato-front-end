import React from 'react';

import Footer from "../organisms/Footer";
import NavBar from '../molecules/NavBar';

const MainTemplate = ({ loggedIn, handleLogout, handleLogin, ...props }) => {
    return (
        <div >
            <NavBar loggedIn={loggedIn} handleLogout={handleLogout} handleLogin={handleLogin}
            />
            {props.children}
            <Footer />
        </div>

    );
}

export default MainTemplate;