/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import { withRouter } from 'react-router';

import route from '../../../utils/route.util';

const { location } = window;

/**
 *  Auth Container
 */
@withRouter
export default class extends Component {
  static displayName = 'Firepack--AuthContainer';

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

  static contextTypes = {
    appTitle: PropTypes.node.isRequired,
    appDescription: PropTypes.node.isRequired,
    firebaseAuthProviders: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
  };

  componentWillMount() {
    const { router, app, user } = this.props;

    if (app.isReady && !user.isAuthenticating && user.isAuthenticated) {
      router.replace({ pathname: route('root') });
    }
  }

  render() {
    const { children } = this.props;
    const { appTitle, appDescription, firebaseAuthProviders } = this.context;

    return (
      <div className="Firepack--AuthContainer">
        <div className="Firepack--AuthContainer--Content">
          {cloneElement(children, {
            key: location.pathname,
            appTitle,
            appDescription,
            firebaseAuthProviders,
          })}
        </div>
      </div>
    );
  }
}
