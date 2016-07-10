/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Store (Development)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import logger from '../middleware/logger.middleware';
import crashReporter from '../middleware/crashReporter.middleware';

import DevTools from '../components/dev/DevTools';

import reducer from '../reducer';

/**
 *  Create App Store
 */
const createAppStore = compose(
  applyMiddleware(logger, crashReporter, thunk),
  window.devToolsExtension
    ? window.devToolsExtension()
    : DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);

/**
 *  Create Store
 */
export default initState => {
  const store = createAppStore(reducer, initState);

  if (module.hot) {
    module.hot.accept('../reducer', () => (
      store.replaceReducer(require('../reducer').default) // eslint-disable-line
    ));
  }

  return store;
};
