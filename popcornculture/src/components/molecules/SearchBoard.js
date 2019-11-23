import React, { Component } from "react";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

const SearchBoard = props => {
  //   const [searchValue, setSearchValue] = useState("");

  //   const handleSearchInputChanges = (e) => {
  //     setSearchValue(e.target.value);
  //   }

  //   const resetInputField = () => {
  //     setSearchValue("")
  //   }

  //   const callSearchFunction = (e) => {
  //     e.preventDefault();
  //     props.search(searchValue);
  //     resetInputField();
  //   }

  return (
    <div>
      <TextInput name="Search" value="Search for movie" />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBoard;
