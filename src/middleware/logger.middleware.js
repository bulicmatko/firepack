/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Logger - Middleware

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  Logger
 */
export default store => next => action => {
  if (typeof action === 'function') {
    return next(action);
  }

  console.groupCollapsed('Dispatch action:', action.type); // eslint-disable-line
  console.log('%cPrev state:', 'color: gray', store.getState()); // eslint-disable-line
  console.log('%cAction:', 'color: blue', action); // eslint-disable-line
  console.log('%cNext state:', 'color: green', store.getState()); // eslint-disable-line
  console.groupEnd(); // eslint-disable-line

  return next(action);
};
