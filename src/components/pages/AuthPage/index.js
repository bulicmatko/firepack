/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';

import Component from './Component';

import signInWithPopup from '../../../actions/auth/signInWithPopup.action';

/**
 *  Connector
 */
export default connect(
  () => ({}),
  dispatch => ({
    onSignInWithFacebook: () => dispatch(signInWithPopup('Facebook')),
    onSignInWithTwitter: () => dispatch(signInWithPopup('Twitter')),
    onSignInWithGoogle: () => dispatch(signInWithPopup('Google')),
    onSignInWithGithub: () => dispatch(signInWithPopup('Github')),
  })
)(Component);
