/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Action Types - Constants

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import createActionTypes from '../utils/createActionTypes.util';

/**
 *  App
 */
export const APP = createActionTypes(
  'app',
  [
    'SETUP',
  ]
);

/**
 *  Auth
 */
export const AUTH = createActionTypes(
  'auth',
  [
    'SIGN_IN_WITH_POPUP_START',
    'SIGN_IN_WITH_POPUP_SUCCESS',
    'SIGN_IN_WITH_POPUP_FAIL',

    'AUTHENTICATED',
    'UNAUTHENTICATED',

    'SIGN_OUT_START',
    'SIGN_OUT_SUCCESS',
    'SIGN_OUT_FAIL',
  ]
);
