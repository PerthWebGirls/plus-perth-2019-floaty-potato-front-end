import React from 'react';
import PropTypes from 'prop-types';
import PageTitles from '../atoms/PageTitles';
import "./SignupForm.css"
class SignupForm extends React.Component {
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
    this.setState({ username: '', password: '' });
  }

  render() {
    return (
      <form className="Content-Wrap" onSubmit={e => this.props.handle_signup(e, this.state)}>
        <PageTitles>Sign Up</PageTitles>
        <label className="Label" htmlFor="username">Username</label>
        <input className="Input"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label className="Label" htmlFor="email">Email</label>
        <input className="Input"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handle_change}
        />
        <label className="Label" htmlFor="password">Password</label>
        <input className="Input"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <button className="SubmitButton" type="submit">Sign Up</button>
        
      </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};