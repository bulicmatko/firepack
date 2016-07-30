/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Reset Password Page - Index

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
    onResetPassword: email => (
      dispatch(auth.sendPasswordResetEmail(email))
    ),
  })
)(Component);
