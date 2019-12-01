import React from "react";
import TextLink from "../atoms/TextLink";
import Button from "../atoms/Button";
import "./NavBar.css";
import Menu from './Menu'

const NavBar = ({ onTextLinkClick, onIconClick, ...props }) => {
  return (
    <div className="NavBar">
      <div className="NavLogo">
        <img className="Logo" src="" alt="" />
        <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
          PopcornCulture
        </TextLink>
      </div>



      <div className="NavMenu">
        <Menu onIconClick={onIconClick} />
        <Button className="LogIn">Log in</Button>

      </div>



    </div >
  );
};

export default NavBar;