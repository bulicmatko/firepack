/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create User With Email And Password

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Create User With Email And Password
 */
export default (email, password) => (
  new Promise((resolve, reject) => (
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject)
    )
  )
);
