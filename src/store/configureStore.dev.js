/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Configure Store (Development)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import logger from '../middleware/logger.middleware';
import crashReporter from '../middleware/crashReporter.middleware';

import DevTools from '../components/dev/DevTools';

const { location, devToolsExtension } = window;

/**
 *  Configure Store
 */
export default compose(
  applyMiddleware(logger, crashReporter, thunk),
  devToolsExtension
    ? devToolsExtension()
    : DevTools.instrument(),
  persistState(
    location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);
