import React from "react";
import LoginForm from "../organisms/LoginForm";
import MainTemplate from "../templates/MainTemplate";

const LoginPage = ({ loggedIn, handleLogin, handleLogout, ...props }) => {


  return (
    <div className="page-container">
      <MainTemplate loggedIn={loggedIn} handleLogout={handleLogout}>
        <LoginForm handleLogin={handleLogin} loggedIn={loggedIn} />
      </MainTemplate>

    </div>
  );
}
export default LoginPage;