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
    app: PropTypes.shape({
      isReady: PropTypes.bool.isRequired,
    }).isRequired,
    onSignInWithFacebook: PropTypes.func.isRequired,
    onSignInWithTwitter: PropTypes.func.isRequired,
    onSignInWithGoogle: PropTypes.func.isRequired,
    onSignInWithGithub: PropTypes.func.isRequired,
  };

  static defaultProps = {
    app: {},
    onSignInWithFacebook: noop,
    onSignInWithTwitter: noop,
    onSignInWithGoogle: noop,
    onSignInWithGithub: noop,
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
    return (
      <div styleName="AuthPage">
        <div styleName="AuthPage--Content">
          <h1>Firepack App</h1>
          <p>Welcome to Firepack App Demo</p>
          <ul>
            <li>
              <button onClick={this.handleSignInWithFacebook}>
                Sign in with Facebook
              </button>
            </li>
            <li>
              <button onClick={this.handleSignInWithTwitter}>
                Sign in with Twitter
              </button>
            </li>
            <li>
              <button onClick={this.handleSignInWithGoogle}>
                Sign in with Google
              </button>
            </li>
            <li>
              <button onClick={this.handleSignInWithGithub}>
                Sign in with Github
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
