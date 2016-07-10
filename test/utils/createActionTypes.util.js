/* eslint-env mocha */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Action Types Util - Test

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { expect } from 'chai';

import createActionTypes from '../../firepack/utils/createActionTypes.util';

/**
 *  Create Action Types Util - Test
 */
describe('Create Action Types Util', () => {
  it('should create action types object', () => {
    const expectedObject = {
      ACTION_1: '@@firepack/prefix/ACTION_1',
      ACTION_2: '@@firepack/prefix/ACTION_2',
    };
    const resultObject = createActionTypes('prefix', ['ACTION_1', 'ACTION_2']);

    expect(resultObject).to.deep.equal(expectedObject);
  });
});
