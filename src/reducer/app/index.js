/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { fromJS } from 'immutable';

import { APP } from '../../constants/actionTypes.const';

import createReducer from '../../utils/createReducer.util';

/**
 *  Initial State
 */
const initState = fromJS({
  isReady: false,
});

/**
 *  Reducer
 */
export default createReducer({
  [APP.SETUP]: state => (
    state.set('isReady', true)
  ),
}, initState);
