import React from "react";
import TextLink from "../atoms/TextLink";

const Menu = ({ onTextLinkClick }) => {
  return (
    <>
      <TextLink linkType="Profile" onButtonClick={onTextLinkClick}>
        Profile
      </TextLink>
      <TextLink linkType="Watch List" onButtonClick={onTextLinkClick}>
        Watch List
      </TextLink>
      <TextLink linkType="log out" onButtonClick={onTextLinkClick}>
        Log out
      </TextLink>
    </>
  );
};

export default Menu;
