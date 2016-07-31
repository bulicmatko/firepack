/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign Up Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import noop from 'lodash/noop';

import route from '../../../../utils/route.util';

/**
 *  Sign Up Page
 */
export default class extends Component {
  static displayName = 'Firepack--SignUpPage';

  static propTypes = {
    onSignUp: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onSignUp: noop,
  };

  state = {
    email: '',
    password: '',
  };

  handleEmailChange = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  handleSignUp = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSignUp(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="Firepack--SignUpPage">
        <div className="Firepack--SignUpPage--Content">
          <h3>Sign up</h3>
          <p>Create your account</p>
          <form onSubmit={this.handleSignUp}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@email.com"
                value={email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="p45sw0rd"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div>
              <button type="submit">
                Sign up
              </button>
            </div>
          </form>
          <div>
            <Link to={route('auth.sign-in')}>Sign in</Link>
            <Link to={route('auth.reset-password')}>Reset password</Link>
          </div>
        </div>
      </div>
    );
  }
}
