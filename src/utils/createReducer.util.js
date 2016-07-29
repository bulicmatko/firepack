/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create Reducer - Util

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Create Reducer
 */
export default (handlers = {}, initState = {}) => (
  (state = initState, action) => {
    const { type, payload } = action;

    return handlers[type]
      ? handlers[type](state, payload)
      : state;
  }
);
