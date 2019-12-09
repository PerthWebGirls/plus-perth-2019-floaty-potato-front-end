import React, { Component } from "react";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import "./SearchBoard.css"

class SearchBoard extends Component {
  state = {
    searchValue: '',
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  resetInputField = () => {
    this.setState({ searchValue: '' });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchValue);
    this.resetInputField();
  }

  render() {
    return (
      <div className="SearchContainer">
        <form className="SearchForm">
          <TextInput className="SearchForm" placeholder="Search for..." value={this.state.searchValue} onChange={this.handleOnChange} />
          <Button  className="SearchFormButton" onButtonClick={this.handleSearch}>Search</Button>
        </form>
      </div >
    );
  }

};

export default SearchBoard;




