/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Action Types Util - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { expect } from 'chai';

import createActionTypes from '../../src/utils/createActionTypes.util';

/**
 *  Create Action Types Util - Test
 */
describe('Create Action Types Util', () => {
  it('should create action types object', () => {
    const expectedObject = {
      ACTION_1: '@@firepack/ACTION_1',
      ACTION_2: '@@firepack/ACTION_2',
    };
    const resultObject = createActionTypes(['ACTION_1', 'ACTION_2'], '@@firepack');

    expect(resultObject).to.deep.equal(expectedObject);
  });
});
