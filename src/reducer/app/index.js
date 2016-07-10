/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App - Reducer

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { fromJS } from 'immutable';

import { APP } from '../../constants/actionTypes.const';

/**
 *  Initial State
 */
const initState = fromJS({
  isReady: false,
});

/**
 *  Hash Map
 */
const hashMap = {
  [APP.SETUP]: state => (
    state.set('isReady', true)
  ),
};

/**
 *  App - Reducer
 */
export default (state = initState, action) => {
  const { type, payload } = action;

  return hashMap[type]
    ? hashMap[type](state, payload)
    : state;
};
