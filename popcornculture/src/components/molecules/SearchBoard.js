// import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   },
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: "none"
//   }
// }));

// const Search = (props) => {
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
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="standard-search"
//           label="Search field"
//           type="search"
//           className={classes.textField}
//           value={searchValue}
//           onChange={handleSearchInputChanges}
//           margin="normal"
//         />
//         <Button onClick={callSearchFunction} variant="contained" className={classes.button}>
//           SEARCH
//         </Button>
//       </div>
//     </form>
//   );
// }

// export default Search;
