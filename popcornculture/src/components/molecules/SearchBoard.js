import React, { Component } from "react";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

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
      <div>
        <form>
          <TextInput placeholder="Search for..." value={this.state.searchValue} onChange={this.handleOnChange} />
          <Button onButtonClick={this.handleSearch}>Search</Button>
        </form>
      </div >
    );
  }

};

export default SearchBoard;




