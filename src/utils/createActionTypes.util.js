/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Action Types - Util

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Create Action Types
 */
export default (prefix, actionTypes) => (
  actionTypes.reduce((prev, curr, index, array) => (
    { ...prev, [array[index]]: `@@firepack/${prefix}/${array[index]}` }
  ), {})
);
