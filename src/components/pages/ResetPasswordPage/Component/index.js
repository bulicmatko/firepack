/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Reset Password Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import noop from 'lodash/noop';

import route from '../../../../utils/route.util';

/**
 *  Reset Password Page
 */
export default class extends Component {
  static displayName = 'Firepack--ResetPasswordPage';

  static propTypes = {
    onResetPassword: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onResetPassword: noop,
  };

  state = {
    email: '',
  };

  handleEmailChange = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  handleResetPassword = (e) => {
    e.preventDefault();
    const { email } = this.state;
    this.props.onResetPassword(email);
  };

  render() {
    const { email } = this.state;

    return (
      <div className="Firepack--ResetPasswordPage">
        <div className="Firepack--ResetPasswordPage--Content">
          <h3>Reset password</h3>
          <p>Reset your password</p>
          <form onSubmit={this.handleResetPassword}>
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
              <button type="submit">
                Reset password
              </button>
            </div>
          </form>
          <div>
            <Link to={route('auth.sign-in')}>Sign in</Link>
            <Link to={route('auth.sign-up')}>Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}
