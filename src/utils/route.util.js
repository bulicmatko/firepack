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
  'auth.sign-up': '/auth/sign-up',
  'auth.sign-in': '/auth/sign-in',
  'auth.reset-password': '/auth/reset-password',
};

/**
 *  Route
 */
export default name => routes[name];
