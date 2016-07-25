/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  User Selector - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 *  User Selectors
 */
export const getUser = state => state.user.toJS();

/**
 *  User Data Selectors
 */
export const getUserData = state => state.user.toJS().data;
