import React from "react";
import TextLink from "../atoms/TextLink";
import "./NavBar.css";
import Menu from './Menu'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function NavBar({ loggedIn, handleLogout, onTextLinkClick, onIconClick, ...props }) {
  const logged_out_nav = (
    <div className="NavBar">
      <Link to="/">
        <div className="NavLogo">
          <img src="/static/popcorn-culture.png" alt="popcorn" />
          <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
            Popcorn Culture
        </TextLink>
        </div>
      </Link>
      <div className="NavMenu">
        <ul>
          <Link to="/Login">
            <li >login / Signup</li>
          </Link>

        </ul>
      </div>
    </div >
  );

  const logged_in_nav = (
    <div className="NavBar">
      <Link to="/">
        <div className="NavLogo">
        <img src="/static/popcorn-culture.png" alt="popcorn" />
          <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
            Popcorn Culture
        </TextLink>
        </div>
      </Link>
      <div className="NavMenu">
        <Menu onIconClick={onIconClick} />
          <a onClick={handleLogout}>logout</a>
      </div>
    </div>
  );
  return <div>{loggedIn ? logged_in_nav : logged_out_nav}</div>;
}

export default NavBar;

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};
