/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign Out

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Sign Out
 */
export default () => (
  new Promise((resolve, reject) => (
    firebase
      .auth()
      .signOut()
      .then(resolve)
      .catch(reject)
    )
  )
);
