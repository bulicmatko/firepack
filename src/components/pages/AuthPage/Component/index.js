/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import noop from 'lodash/noop';

import styles from './styles';

/**
 *  Auth Page
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'AuthPage';

  static propTypes = {
    onSignInWithFacebook: PropTypes.func.isRequired,
    onSignInWithTwitter: PropTypes.func.isRequired,
    onSignInWithGoogle: PropTypes.func.isRequired,
    onSignInWithGithub: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onSignInWithFacebook: noop,
    onSignInWithTwitter: noop,
    onSignInWithGoogle: noop,
    onSignInWithGithub: noop,
  };

  static contextTypes = {
    firebaseAuthProviders: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
  };

  handleSignInWithFacebook = (e) => {
    e.preventDefault();
    this.props.onSignInWithFacebook();
  };

  handleSignInWithTwitter = (e) => {
    e.preventDefault();
    this.props.onSignInWithTwitter();
  };

  handleSignInWithGoogle = (e) => {
    e.preventDefault();
    this.props.onSignInWithGoogle();
  };

  handleSignInWithGithub = (e) => {
    e.preventDefault();
    this.props.onSignInWithGithub();
  };

  render() {
    const { firebaseAuthProviders } = this.context;

    return (
      <div styleName="AuthPage">
        <div styleName="AuthPage--Content">
          <h1>Firepack App</h1>
          <p>Firepack Application Boilerplate</p>
          <ul>
            {firebaseAuthProviders.map(authProvider => (
              <li key={authProvider}>
                <button onClick={this[`handleSignInWith${authProvider}`]}>
                  Sign in with {authProvider}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
