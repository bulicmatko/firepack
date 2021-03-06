/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  App Selector - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { fromJS } from 'immutable';

import { getApp } from '../../../src/selectors/app';

chai.use(chaiImmutable);

/**
 *  App Selector - Test
 */
describe('App Selector', () => {
  it('should get app object from state', () => {
    const state = {
      app: fromJS({
        isReady: true,
      }),
    };
    const expectedState = state.app.toJS();
    const newState = getApp(state);

    expect(newState).to.deep.equal(expectedState);
  });
});
