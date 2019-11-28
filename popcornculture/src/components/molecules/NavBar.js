import React from "react";
import TextLink from "../atoms/TextLink";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const NavBar = ({ onTextLinkClick }) => {
  return (
    <div>
      <div>
        <img src="" alt="website logo" />
        <TextLink linkType="Popcornculture" onButtonClick={onTextLinkClick}>
          PopcornCulture
        </TextLink>
      </div>
      <div>
        <Icon onButtonClick={onTextLinkClick} />
      </div>
      <Button>Log in</Button>
    </div>
  );
};

export default NavBar;
