import React, { Component } from "react";
import TextLink from "../atoms/TextLink";
import Icon from "../atoms/Icon"

class Menu extends Component {
  container = React.createRef();
  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick = (event) => {
    event.preventDefault();
    this.setState(state => {
      return {
        showMenu: !state.showMenu,
      };
    });
  };
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  }
  render() {
    return (
      <div className="container" ref={this.container}>
        <Icon onIconClick={this.handleButtonClick} />
        {this.state.showMenu && (
          <div className="dropdown">
            <TextLink linkType="Profile" onButtonClick={this.props.onTextLinkClick}>
              Profile
                </TextLink>
            <TextLink linkType="Watch List" onButtonClick={this.props.onTextLinkClick}>
              Watch List
                </TextLink>
            <TextLink linkType="log out" onButtonClick={this.props.onTextLinkClick}>
              Log out
                </TextLink>
          </div>
        )}
      </div>
    );
  }
}
export default Menu;
