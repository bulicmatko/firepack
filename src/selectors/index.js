/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Selectors

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { getApp } from './app';
import { getUser, getUserData } from './user';

export const app = {
  getApp,
};

export const user = {
  getUser,
  getUserData,
};

export default {
  app,
  user,
};
