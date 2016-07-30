/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign Up Page - Index

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
    onSignUp: (email, password) => (
      dispatch(auth.createUserWithEmailAndPassword(email, password))
    ),
  })
)(Component);
