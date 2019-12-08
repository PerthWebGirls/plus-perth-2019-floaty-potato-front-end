import React from 'react';
import PropTypes from 'prop-types';
import "./LoginForm.css"
import PageTitles from '../atoms/PageTitles';
import { Link } from 'react-router-dom';
import Button from "../atoms/Button";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
  };
  static contextTypes = {
    router: PropTypes.object
  }

  redirectToTarget = () => {
    this.context.router.history.push(`/`)
  }
  handle_change = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  on_success = () => {
    this.setState({ username: '', password: '' });


  }


  render() {
    return (
      <>
        <div>
          {/* {this.renderRedirect()} */}
        </div>
        <form className="Content-Wrap" onSubmit={e => this.props.handleLogin(e, this.state, this.on_success)}>
          <PageTitles>Login</PageTitles>
          <label className="Label" htmlFor="username">Username</label>
          <input className="Input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handle_change}
          />

          <label className="Label" htmlFor="password">Password</label>
          <input className="Input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />

          <Button onButtonClick={this.redirectToTarget}>submit</Button>
          <div><span>Don't you have any account? <Link to="/Signup">Join here</Link></span></div >
        </form >
      </>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
};