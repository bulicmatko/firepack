/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import noop from 'lodash/noop';
import omit from 'lodash/omit';

/**
 *  Auth Page
 */
export default class extends Component {
  static displayName = 'Firepack--AuthPage';

  static propTypes = {
    appTitle: PropTypes.node.isRequired,
    appDescription: PropTypes.node.isRequired,
    firebaseAuthProviders: PropTypes.shape({
      EmailAndPassword: PropTypes.bool.isRequired,
      Facebook: PropTypes.bool.isRequired,
      Twitter: PropTypes.bool.isRequired,
      Google: PropTypes.bool.isRequired,
      Github: PropTypes.bool.isRequired,
    }).isRequired,
    onSignInWithFacebook: PropTypes.func.isRequired,
    onSignInWithTwitter: PropTypes.func.isRequired,
    onSignInWithGoogle: PropTypes.func.isRequired,
    onSignInWithGithub: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    appTitle: '',
    appDescription: '',
    firebaseAuthProviders: {},
    onSignInWithFacebook: noop,
    onSignInWithTwitter: noop,
    onSignInWithGoogle: noop,
    onSignInWithGithub: noop,
    children: null,
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
    const { appTitle, appDescription, firebaseAuthProviders, children } = this.props;
    const firebaseAuthSocialProvidersArray = Object.keys(
      omit(firebaseAuthProviders, 'EmailAndPassword')
    ).filter(authProvider => firebaseAuthProviders[authProvider]);

    return (
      <div className="Firepack--AuthPage">
        <div className="Firepack--AuthPage--Content">
          <h1>{appTitle}</h1>
          <p>{appDescription}</p>
          {(!firebaseAuthProviders.EmailAndPassword && !firebaseAuthProviders.Facebook &&
            !firebaseAuthProviders.Twitter && !firebaseAuthProviders.Google &&
            !firebaseAuthProviders.Github) && (<div>No auth providers enabled!</div>)}
          {firebaseAuthProviders.EmailAndPassword && (
            <div>
              {children}
              {(firebaseAuthProviders.Facebook || firebaseAuthProviders.Twitter ||
                firebaseAuthProviders.Google || firebaseAuthProviders.Github) && (
                <div>
                  or continue with
                </div>
              )}
            </div>
          )}
          {!firebaseAuthProviders.EmailAndPassword && (firebaseAuthProviders.Facebook ||
            firebaseAuthProviders.Twitter || firebaseAuthProviders.Google ||
            firebaseAuthProviders.Github) && (<div>Continue in with</div>)}
          <ul>
            {firebaseAuthSocialProvidersArray.map((authProvider, i) => (
              firebaseAuthProviders[authProvider] &&
                <li
                  key={firebaseAuthSocialProvidersArray[i]}
                  style={{ width: firebaseAuthSocialProvidersArray.length % 2 ? '100%' : '50%' }}
                >
                  <button
                    onClick={this[`handleSignInWith${firebaseAuthSocialProvidersArray[i]}`]}
                    className={`Firepack--ProviderButton--${firebaseAuthSocialProvidersArray[i]}`}
                  >
                    {firebaseAuthSocialProvidersArray[i]}
                  </button>
                </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
