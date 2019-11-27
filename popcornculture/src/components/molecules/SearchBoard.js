import React, { Component } from "react";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

class SearchBoard extends Component {
  state = {
    searchValue: ''
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  handleSubmit(event) {


  }
  render() {
    return (
      <div>
        <form>
          <TextInput placeholder="Search for..." value={this.state.searchValue} onChange={this.handleChange.bind(this)} />
          <Button>Search</Button>
        </form>
      </div >
    );
  }
};

export default SearchBoard;





// class Search extends Component {
//   state = {
//     query: '',
//   }

//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input
//           placeholder="Search for..."
//           ref={input => this.search = input}
//           onChange={this.handleInputChange}
//         />
//         <p>{this.state.query}</p>
//       </form>
//     )
//   }
//  }

//  export default Search





