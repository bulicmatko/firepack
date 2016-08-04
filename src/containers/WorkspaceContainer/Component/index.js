/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Workspace Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import route from '../../../utils/route.util';

/**
 *  Workspace Container
 */
@withRouter
export default class extends Component {
  static displayName = 'Firepack--WorkspaceContainer';

  static propTypes = {
    router: PropTypes.object.isRequired,
    app: PropTypes.shape({
      isReady: PropTypes.bool.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      isAuthenticating: PropTypes.bool.isRequired,
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    router: {},
    app: {},
    user: {},
    children: null,
  };

  componentWillMount() {
    const { router, app, user } = this.props;

    if (app.isReady && !user.isAuthenticating && !user.isAuthenticated) {
      router.replace({ pathname: route('auth') });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className="WorkspaceContainer">
        <div className="WorkspaceContainer--Content">
          {children}
        </div>
      </div>
    );
  }
}
