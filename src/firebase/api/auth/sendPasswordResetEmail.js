/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Send Password Reset Email

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Send Password Reset Email
 */
export default email => (
  new Promise((resolve, reject) => (
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(resolve)
      .catch(reject)
    )
  )
);
