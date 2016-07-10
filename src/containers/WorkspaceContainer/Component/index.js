/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Workspace Container

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';

import Menu from '../../../components/shared/Menu';

import route from '../../../utils/route.util';

import styles from './styles';

const { location } = window;

/**
 *  Workspace Container
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'WorkspaceContainer';

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
    menu: PropTypes.array,
  };

  componentWillMount() {
    const { router, app, user } = this.props;

    if (app.isReady && !user.isAuthenticating && !user.isAuthenticated) {
      router.replace({ pathname: route('auth') });
    }
  }

  render() {
    const { children } = this.props;
    const { menu } = this.context;

    const menuConfig = [
      {
        title: 'Menu',
        links: [
          {
            icon: 'user',
            title: 'Auth',
            route: '/auth',
          },
          {
            icon: 'home',
            title: 'Root',
            route: '/',
          },
          {
            icon: 'tachometer',
            title: 'Dashboard',
            route: '/dashboard',
          },
        ],
      },
      ...menu,
    ];

    return (
      <div styleName="WorkspaceContainer">
        <div styleName="WorkspaceContainer--Sidebar">
          <h2 styleName="title">
            <i className="fa fa-fw fa-cube" />
            <span>Firepack</span>
          </h2>
          <Menu menu={menuConfig} />
        </div>
        <div styleName="WorkspaceContainer--Content">
          {cloneElement(children, { key: location.pathname })}
        </div>
      </div>
    );
  }
}
