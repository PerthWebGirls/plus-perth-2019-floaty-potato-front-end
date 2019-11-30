import React from "react";
import NavBar from "../molecules/NavBar";
import AppFooter from "../molecules/AppFooter";
import SignupForm from "../organisms/SignupForm";

const SignupPage=({ movies, onSearch, ...props }) => {



    return (
      <div className="App">
        <NavBar />
        <SignupForm handle_signup={props.handle_signup} />
        <AppFooter />

      </div>
    );
  }
  export default SignupPage;