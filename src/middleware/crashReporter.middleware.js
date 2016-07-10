/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Crash Reporter - Middleware

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Crash Reporter
 */
export default store => next => action => {
  try {
    return next(action);
  } catch (error) {
    console.error('Caught an exception:', error); // eslint-disable-line
    console.error('Dispatching:', action); // eslint-disable-line
    console.error('Next state:', store.getState()); // eslint-disable-line

    throw error;
  }
};
