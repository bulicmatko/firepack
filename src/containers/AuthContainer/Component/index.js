/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Auth Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';

import route from '../../../utils/route.util';

import styles from './styles';

const { location } = window;

/**
 *  Auth Container
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'AuthContainer';

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

    if (app.isReady && !user.isAuthenticating && user.isAuthenticated) {
      router.replace({ pathname: route('dashboard') });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div styleName="AuthContainer">
        <div styleName="AuthContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
