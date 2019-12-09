import React from "react";
import TextLink from "../atoms/TextLink";
import "./NavBar.css";
import Menu from './Menu'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function NavBar({ logged_in, handle_logout, onTextLinkClick, onIconClick, ...props }) {
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
      <div>
        <ul>
          <Link to="/Login">
            <li >login</li>
          </Link>
          <Link to="/Signup">
            <li >signup</li>
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
        <ul>
          <li onClick={props.handle_logout}>logout</li>
        </ul>
      </div>
    </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default NavBar;

NavBar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  handle_logout: PropTypes.func.isRequired
};
