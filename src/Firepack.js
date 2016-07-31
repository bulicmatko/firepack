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
import configureStore from './store';

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
    firebaseConfig: PropTypes.shape({
      apiKey: PropTypes.string.isRequired,
      authDomain: PropTypes.string.isRequired,
      databaseURL: PropTypes.string.isRequired,
      storageBucket: PropTypes.string.isRequired,
    }).isRequired,
    firebaseAuthProviders: PropTypes.shape({
      EmailAndPassword: PropTypes.bool.isRequired,
      Facebook: PropTypes.bool.isRequired,
      Twitter: PropTypes.bool.isRequired,
      Google: PropTypes.bool.isRequired,
      Github: PropTypes.bool.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    appTitle: '',
    appDescription: '',
    routes: {},
    reducer: noop,
    firebaseConfig: {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
    },
    firebaseAuthProviders: {
      EmailAndPassword: true,
      Facebook: true,
      Twitter: true,
      Google: true,
      Github: true,
    },
  };

  static childContextTypes = {
    appTitle: PropTypes.node,
    appDescription: PropTypes.node,
    firebaseConfig: PropTypes.object,
    firebaseAuthProviders: PropTypes.object,
  };

  getChildContext() {
    const {
      appTitle,
      appDescription,
      firebaseConfig,
      firebaseAuthProviders,
    } = this.props;

    return {
      appTitle,
      appDescription,
      firebaseConfig,
      firebaseAuthProviders,
    };
  }

  render() {
    const { routes, reducer } = this.props;

    const store = configureStore(createReducer(reducer), {});
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
