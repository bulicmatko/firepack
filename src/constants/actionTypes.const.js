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

  'CREATE_USER_WITH_EMAIL_AND_PASSWORD_START',
  'CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS',
  'CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL',

  'SIGN_IN_WITH_EMAIL_AND_PASSWORD_START',
  'SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS',
  'SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAIL',

  'SEND_PASSWORD_RESET_EMAIL_START',
  'SEND_PASSWORD_RESET_EMAIL_SUCCESS',
  'SEND_PASSWORD_RESET_EMAIL_FAIL',

  'AUTHENTICATED',
  'UNAUTHENTICATED',

  'SIGN_OUT_START',
  'SIGN_OUT_SUCCESS',
  'SIGN_OUT_FAIL',
], '@@firepack/auth');

export default {
  APP, AUTH,
};
