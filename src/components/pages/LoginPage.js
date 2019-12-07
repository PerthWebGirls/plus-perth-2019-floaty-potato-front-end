import React from "react";
import NavBar from "../molecules/NavBar";
import Footer from "../organisms/Footer";
import LoginForm from "../organisms/LoginForm";

const LoginPage=({ movies, onSearch, ...props }) => {



    return (
      <div className="page-container">
        <NavBar />
        <LoginForm handle_login={props.handle_login} />
        <Footer />

      </div>
    );
  }
  export default LoginPage;