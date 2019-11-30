import React from "react";
import TextLink from "../atoms/TextLink";
import Button from "../atoms/Button";
import Menu from "../molecules/Menu";

const NavBar = ({ onTextLinkClick, onIconClick, ...props }) => {
  return (
    <div>
      <div>
        <img src="" alt="website logo" />
        <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
          PopcornCulture
        </TextLink>
      </div>
      <Menu onIconClick={onIconClick} />
      <Button>Log in</Button>
    </div>
  );
};

export default NavBar;
