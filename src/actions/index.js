/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import signInWithPopup from './auth/signInWithPopup.action';
import signOut from './auth/signOut.action';

export default {
  auth: {
    signInWithPopup,
    signOut,
  },
};
