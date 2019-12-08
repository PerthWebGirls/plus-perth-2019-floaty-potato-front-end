import React from "react";
import LoginForm from "../organisms/LoginForm";
import MainTemplate from "../templates/MainTemplate";

const LoginPage = ({ loggedIn, handleLogin, ...props }) => {



  return (
    <div className="page-container">
      <MainTemplate loggedIn={loggedIn} >
        <LoginForm handleLogin={props.handleLogin} loggedIn={loggedIn} />
      </MainTemplate>

    </div>
  );
}
export default LoginPage;