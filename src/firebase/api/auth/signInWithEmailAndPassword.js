/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign In With Email And Password

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Sign In With Email And Password
 */
export default (email, password) => (
  new Promise((resolve, reject) => (
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject)
    )
  )
);
