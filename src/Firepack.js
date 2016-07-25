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

import './styles/global';

/**
 *  Firepack
 */
export default class extends Component {
  static displayName = 'Firepack';

  static propTypes = {
    routes: PropTypes.object.isRequired,
    reducer: PropTypes.func.isRequired,
    firebaseConfig: PropTypes.object.isRequired,
    firebaseAuthProviders: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
  };

  static defaultProps = {
    routes: {},
    reducer: noop,
    firebaseConfig: {},
    firebaseAuthProviders: ['Google'],
  };

  static childContextTypes = {
    firebaseConfig: PropTypes.object,
    firebaseAuthProviders: PropTypes.array,
  };

  getChildContext() {
    const { firebaseConfig, firebaseAuthProviders } = this.props;

    return {
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
