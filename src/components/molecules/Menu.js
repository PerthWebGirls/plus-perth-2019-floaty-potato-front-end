import React, { Component } from "react";
import TextLink from "../atoms/TextLink";
import Icon from "../atoms/Icon";
import "./Menu.css";
import { Link } from "react-router-dom";

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
            <div className="dropdown-content">
              <Link to="/profile" >
                <TextLink linkType="Profile" onButtonClick={this.props.onTextLinkClick}>
                  Profile
                </TextLink>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Menu;
        <Icon onIconClick={this.handleButtonClick} />