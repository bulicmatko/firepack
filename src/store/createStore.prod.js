/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Store (Production)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer';

/**
 *  Create App Store
 */
const createAppStore = compose(
  applyMiddleware(thunk)
)(createStore);

/**
 *  Create Store
 */
export default initState => (
  createAppStore(reducer, initState)
);
