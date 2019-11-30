import React, { Component } from "react";
import TextLink from "../atoms/TextLink";
import Icon from "../atoms/Icon"
import "./NavBar.css"

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: true,
    });
  }

  render() {
    return (
      <>
        <div>
          <Icon onIconClick={this.showMenu} />
          {
            this.state.showMenu
              ? (
                <div className="menu">
                  <TextLink linkType="Profile">
                    Profile
      </TextLink>
                  <TextLink linkType="Watch List" onButtonClick={this.props.onTextLinkClick}>
                    Watch List
      </TextLink>
                  <TextLink linkType="log out" onButtonClick={this.props.onTextLinkClick}>
                    Log out
      </TextLink>
                </div>
              )
              : (
                null
              )
          }


        </div>
      </>
    );
  }
}
export default Menu;
