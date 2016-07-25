/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Action Types - Util

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Create Action Types
 */
export default (actionTypes, prefix) => (
  actionTypes.reduce((prev, curr, index, array) => (
    { ...prev, [array[index]]: prefix ? `${prefix}/${array[index]}` : array[index] }
  ), {})
);
