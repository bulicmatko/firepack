/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import buildRoutes from './routes';

import './styles/global';

/**
 *  Firepack
 */
export default class extends Component {
  static displayName = 'Firepack';

  static propTypes = {
    firebaseConfig: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
    menu: PropTypes.array.isRequired,
  };

  static defaultProps = {
    firebaseConfig: {},
    routes: [],
    menu: [],
  };

  static childContextTypes = {
    firebaseConfig: PropTypes.object,
    menu: PropTypes.array,
  };

  getChildContext() {
    const { firebaseConfig, menu } = this.props;

    return {
      firebaseConfig,
      menu,
    };
  }

  render() {
    const { routes } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history} routes={buildRoutes(routes)} />
      </Provider>
    );
  }
}
