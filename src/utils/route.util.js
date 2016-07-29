/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Route - Util

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Routes
 */
const routes = {
  root: '/',
  auth: '/auth',
};

/**
 *  Route
 */
export default name => routes[name];
