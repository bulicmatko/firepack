/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Selectors

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { getApp } from './app';
import { getUser, getUserData } from './user';

export default {
  app: {
    getApp,
  },
  user: {
    getUser,
    getUserData,
  },
};
