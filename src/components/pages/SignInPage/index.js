/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign In Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';

import Component from './Component';

import { auth } from '../../../actions';

/**
 *  Connector
 */
export default connect(
  () => ({}),
  dispatch => ({
    onSignIn: (email, password) => (
      dispatch(auth.signInWithEmailAndPassword(email, password))
    ),
  })
)(Component);
