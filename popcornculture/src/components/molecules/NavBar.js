import React from "react";
import TextLink from "../atoms/TextLink";
import "./NavBar.css";
import Menu from './Menu'
import { Link } from 'react-router-dom';


const NavBar = ({ onTextLinkClick, onIconClick, ...props }) => {
  return (
    <div className="NavBar">
      <Link to="/">
        <div className="NavLogo">
          <img className="Logo" src="" alt="" />
          <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
            Popcorn Culture
        </TextLink>
        </div>
      </Link>



      <div className="NavMenu">
        <Menu onIconClick={onIconClick} />

        <Link to="/Login">Log in</Link>
      </div>



    </div >
  );
};

export default NavBar;