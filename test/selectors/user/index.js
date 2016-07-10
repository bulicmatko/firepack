/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User Selector - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { fromJS } from 'immutable';

import userSelector from '../../../firepack/selectors/user';

chai.use(chaiImmutable);

/**
 *  User Selector - Test
 */
describe('User Selector', () => {
  it('should get user object from state', () => {
    const state = {
      user: fromJS({
        email: 'bulicmatko@gmail.com',
        displayName: 'Matko Bulic',
      }),
    };
    const expectedState = state.user.toJS();
    const newState = userSelector(state);

    expect(newState).to.deep.equal(expectedState);
  });
});
