/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign In Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import noop from 'lodash/noop';

import route from '../../../../utils/route.util';

/**
 *  Sign In Page
 */
export default class extends Component {
  static displayName = 'Firepack--SignInPage';

  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onSignIn: noop,
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

  handleSignUp = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSignIn(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="Firepack--SignInPage">
        <div className="Firepack--SignInPage--Content">
          <h3>Sign in</h3>
          <p>Sign in to your account</p>
          <form onSubmit={this.handleSignUp}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div>
              <button type="submit">
                Sign in
              </button>
            </div>
          </form>
          <div>
            <Link to={route('auth.sign-up')}>Sign up</Link>
            <Link to={route('auth.reset-password')}>Reset password</Link>
          </div>
        </div>
      </div>
    );
  }
}
