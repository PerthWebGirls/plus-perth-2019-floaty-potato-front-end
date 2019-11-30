import React from "react";
import NavBar from "../molecules/NavBar";
import AppFooter from "../molecules/AppFooter";
import LoginForm from "../organisms/LoginForm";

const LoginPage=({ movies, onSearch, ...props }) => {



    return (
      <div className="App">
        <NavBar />
        <LoginForm handle_login={props.handle_login} />
        <AppFooter />

      </div>
    );
  }
  export default LoginPage;