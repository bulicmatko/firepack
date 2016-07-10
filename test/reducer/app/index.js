/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App Reducer - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { fromJS } from 'immutable';

import { APP } from '../../../firepack/constants/actionTypes.const';

import appReducer from '../../../firepack/reducer/app';

chai.use(chaiImmutable);

/**
 *  App Reducer - Test
 */
describe('App Reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      isReady: false,
    });
  });

  it('should handle APP.SETUP action type', () => {
    const expectedState = state.set('isReady', true);
    const newState = appReducer(state, { type: APP.SETUP });

    expect(newState).to.equal(expectedState);
  });

  it('should handle \'UNKNOWN\' action types', () => {
    const expectedState = state;
    const newState = appReducer(state, { type: 'UNKNOWN' });

    expect(newState).to.equal(expectedState);
  });
});
