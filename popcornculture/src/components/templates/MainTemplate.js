import React from 'react';
import AppNav from "./organisms/AppNav";
import AppFooter from "./molecule/AppFooter";

const MainTemplate = () => {
    return(
        <div>
        <AppNav/>
        <AppFooter/>
        </div>
        
    );
}

export default MainTemplate;