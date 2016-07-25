/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Reducer - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import user from './user';

/**
 *  Create Reducer
 */
export default content => combineReducers({
  routing: routerReducer,
  app,
  user,
  content,
});
