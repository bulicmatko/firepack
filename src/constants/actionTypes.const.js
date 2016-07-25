/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Action Types - Constants

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import createActionTypes from '../utils/createActionTypes.util';

/**
 *  App
 */
export const APP = createActionTypes([
  'SETUP',
], '@@firepack/app');

/**
 *  Auth
 */
export const AUTH = createActionTypes([
  'SIGN_IN_WITH_POPUP_START',
  'SIGN_IN_WITH_POPUP_SUCCESS',
  'SIGN_IN_WITH_POPUP_FAIL',

  'AUTHENTICATED',
  'UNAUTHENTICATED',

  'SIGN_OUT_START',
  'SIGN_OUT_SUCCESS',
  'SIGN_OUT_FAIL',
], '@@firepack/auth');

export default {
  APP, AUTH,
};
