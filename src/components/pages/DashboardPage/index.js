/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Dashboard Page - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';
import pick from 'lodash/pick';

import Component from './Component';

import getUser from '../../../selectors/user';

import signOut from '../../../actions/auth/signOut.action';

/**
 *  Connector
 */
export default connect(
  state => ({
    user: pick(getUser(state), 'data'),
  }),
  dispatch => ({
    onSignOut: () => dispatch(signOut()),
  })
)(Component);
