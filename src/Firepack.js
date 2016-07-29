  /* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import noop from 'lodash/noop';

import createReducer from './reducer';
import createStore from './store';

/**
 *  Firepack
 */
export default class extends Component {
  static displayName = 'Firepack';

  static propTypes = {
    appTitle: PropTypes.node.isRequired,
    appDescription: PropTypes.node.isRequired,
    routes: PropTypes.object.isRequired,
    reducer: PropTypes.func.isRequired,
    firebaseConfig: PropTypes.object.isRequired,
    firebaseAuthProviders: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
  };

  static defaultProps = {
    appTitle: 'Firepack',
    appDescription: 'Auth wrapper for Firebase applications built with React and Redux',
    routes: {},
    reducer: noop,
    firebaseConfig: {},
    firebaseAuthProviders: ['Google'],
  };

  static childContextTypes = {
    appTitle: PropTypes.node,
    appDescription: PropTypes.node,
    firebaseConfig: PropTypes.object,
    firebaseAuthProviders: PropTypes.array,
  };

  getChildContext() {
    const { appTitle, appDescription, firebaseConfig, firebaseAuthProviders } = this.props;

    return {
      appTitle,
      appDescription,
      firebaseConfig,
      firebaseAuthProviders,
    };
  }

  render() {
    const { routes, reducer } = this.props;

    const store = createStore(createReducer(reducer), {});
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
