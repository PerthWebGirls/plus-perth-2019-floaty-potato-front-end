import React from "react";
import SignupForm from "../organisms/SignupForm";
import "./SignupPage.css"
import MainTemplate from "../templates/MainTemplate";

const SignupPage = ({ movies, onSearch, loggedIn, handleLogout, ...props }) => {



  return (
    <div className="page-container">
      <MainTemplate loggedIn={loggedIn} handleLogout={handleLogout}>

        <SignupForm handle_signup={props.handle_signup} />
      </MainTemplate>


    </div>
  );
}
export default SignupPage;