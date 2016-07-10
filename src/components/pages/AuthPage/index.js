/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';
import pick from 'lodash/pick';

import Component from './Component';

import getApp from '../../../selectors/app';

import signInWithPopup from '../../../actions/auth/signInWithPopup.action';

/**
 *  Connector
 */
export default connect(
  state => ({
    app: pick(getApp(state), 'isReady'),
  }),
  dispatch => ({
    onSignInWithFacebook: () => dispatch(signInWithPopup('Facebook')),
    onSignInWithTwitter: () => dispatch(signInWithPopup('Twitter')),
    onSignInWithGoogle: () => dispatch(signInWithPopup('Google')),
    onSignInWithGithub: () => dispatch(signInWithPopup('Github')),
  })
)(Component);
