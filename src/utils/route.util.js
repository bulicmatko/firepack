/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Route - Util

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Routes
 */
const routes = {
  root: '/',

  /**
   *  Auth
   */
  auth: '/auth',

  /**
   *  Dashboard
   */
  dashboard: '/dashboard',
};

/**
 *  Route
 */
export default name => routes[name];
