/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import { withRouter } from 'react-router';

import route from '../../../utils/route.util';

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
    firebaseAuthProviders: PropTypes.shape({
      EmailAndPassword: PropTypes.bool.isRequired,
      Facebook: PropTypes.bool.isRequired,
      Twitter: PropTypes.bool.isRequired,
      Google: PropTypes.bool.isRequired,
      Github: PropTypes.bool.isRequired,
    }).isRequired,
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
            appTitle,
            appDescription,
            firebaseAuthProviders,
          })}
        </div>
      </div>
    );
  }
}
