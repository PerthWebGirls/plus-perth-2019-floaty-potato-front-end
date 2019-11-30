import React from 'react';
import PropTypes from 'prop-types';
import "./LoginForm.css"
class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };


  on_success = () => {
    this.setState({username: '', password: ''});
  }

  render() {
    return (
      <form className = "LoginForm" method="POST" onSubmit={e => this.props.handle_login(e, this.state, this.on_success)}>
        <h4>Log In</h4>
        <label className ="Label" htmlFor="username">Username</label>
        <input className ="Input"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label className="Label"htmlFor="password">Password</label>
        <input className="Input"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input className ="Submit" type="submit" />
      </form>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};