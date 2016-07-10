/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Workspace Container - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import pick from 'lodash/pick';

import Component from './Component';

import getApp from '../../selectors/app';
import getUser from '../../selectors/user';

/**
 *  Connector
 */
export default connect(
  state => ({
    app: pick(getApp(state), 'isReady'),
    user: pick(getUser(state), 'isAuthenticating', 'isAuthenticated'),
  })
)(withRouter(Component));
