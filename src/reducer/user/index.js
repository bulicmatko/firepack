/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { fromJS } from 'immutable';

import { APP, AUTH } from '../../constants/actionTypes.const';

import createReducer from '../../utils/createReducer.util';

/**
 *  Initial State
 */
const initState = fromJS({
  isAuthenticating: false,
  isAuthenticated: false,
  data: {},
});

/**
 *  Hash Map
 */
export default createReducer({
  [APP.SETUP]: state => (
    state.set('isAuthenticating', true)
  ),
  [AUTH.SIGN_IN_WITH_POPUP_START]: state => (
    state.set('isAuthenticating', true)
  ),
  [AUTH.SIGN_IN_WITH_POPUP_SUCCESS]: state => (
    state.set('isAuthenticating', false)
  ),
  [AUTH.SIGN_IN_WITH_POPUP_FAIL]: state => (
    state.set('isAuthenticating', false)
  ),

  [AUTH.AUTHENTICATED]: (state, payload) => (
    state.mergeDeep({
      isAuthenticating: false,
      isAuthenticated: true,
      data: payload,
    })
  ),
  [AUTH.UNAUTHENTICATED]: state => (
    state.mergeDeep({
      isAuthenticating: false,
      isAuthenticated: false,
      data: {},
    })
  ),

  [AUTH.SIGN_OUT_START]: state => (
    state.set('isAuthenticating', true)
  ),
  [AUTH.SIGN_OUT_SUCCESS]: state => (
    state.set('isAuthenticating', false)
  ),
  [AUTH.SIGN_OUT_FAIL]: state => (
    state.set('isAuthenticating', false)
  ),
}, initState);
