/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Store (Production)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

/**
 *  Create Store
 */
export default compose(
  applyMiddleware(thunk)
)(createStore);
