/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign In With Popup

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Sign In With Popup
 */
export default provider => (
  new Promise((resolve, reject) => (
    firebase
      .auth()
      .signInWithPopup(new firebase.auth[`${provider}AuthProvider`]())
      .then(resolve)
      .catch(reject)
    )
  )
);
