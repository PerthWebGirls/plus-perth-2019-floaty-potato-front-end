import React from 'react';
import PropTypes from 'prop-types';
import PageTitles from '../atoms/PageTitles';
import { Redirect } from 'react-router-dom'
import "./SignupForm.css"
class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    redirect: false,
    errors: {}
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
    this.setState({ redirect: true });
    // // this.context.router.push("/");

  }

  on_failure = (err) => {
    this.setState({ errors: err });
    console.log(err);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
    return (
      <>
        <div>
          {this.renderRedirect()}
        </div>

        <form className="Content-Wrap" onSubmit={e => this.props.handle_signup(e, this.state, this.on_success, this.on_failure)}>
          <PageTitles>Sign Up</PageTitles>
          <div>
            {Object.values(this.state.errors)
              .map((msg, idx) => <span style={{ color: 'red' }} key={idx}>{msg}</span>)}
          </div>
          <label htmlFor="username">Username</label>
          <input
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />
          <input className="button" type="submit" />
        </form>
      </>

    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};