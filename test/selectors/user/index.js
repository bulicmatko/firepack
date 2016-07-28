/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User Selector - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import { fromJS } from 'immutable';

import { getUser, getUserData } from '../../../src/selectors/user';

chai.use(chaiImmutable);

/**
 *  User Selector - Test
 */
describe('User Selector', () => {
  it('should get user object from state', () => {
    const state = {
      user: fromJS({
        isAuthenticating: false,
        isAuthenticated: false,
        data: {},
      }),
    };
    const expectedState = state.user.toJS();
    const newState = getUser(state);

    expect(newState).to.deep.equal(expectedState);
  });

  it('should get user data object from state', () => {
    const state = {
      user: fromJS({
        isAuthenticating: false,
        isAuthenticated: false,
        data: {
          email: 'bulicmatko@gmail.com',
          displayName: 'Matko Bulic',
        },
      }),
    };
    const expectedState = state.user.toJS().data;
    const newState = getUserData(state);

    expect(newState).to.deep.equal(expectedState);
  });
});
