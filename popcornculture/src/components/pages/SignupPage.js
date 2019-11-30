import React from "react";
import NavBar from "../molecules/NavBar";
import Footer from "../organisms/Footer";
import SignupForm from "../organisms/SignupForm";

const SignupPage=({ movies, onSearch, ...props }) => {



    return (
      <div className="Page-container">
        <NavBar />
        <SignupForm handle_signup={props.handle_signup} />
        <Footer />

      </div>
    );
  }
  export default SignupPage;