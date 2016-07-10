/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Initialize

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

import config from '../config';

/**
 *  Initialize
 */
export default () => {
  const unsubscribe = firebase.initializeApp(config);

  return new Promise((resolve, reject) => (
    firebase
      .auth()
      .onAuthStateChanged(
        user => resolve(user, unsubscribe),
        error => reject(error)
      )
  ));
};
