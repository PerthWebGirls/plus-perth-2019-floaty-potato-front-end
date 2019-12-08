import React from "react";
import LoginForm from "../organisms/LoginForm";
import MainTemplate from "../templates/MainTemplate";

const LoginPage = ({ handle_login, ...props }) => {



  return (
    <div className="page-container">
      <MainTemplate >
        <LoginForm handle_login={props.handle_login} />
      </MainTemplate>

    </div>
  );
}
export default LoginPage;