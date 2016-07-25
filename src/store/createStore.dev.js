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

/**
 *  Create Store
 */
export default compose(
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
