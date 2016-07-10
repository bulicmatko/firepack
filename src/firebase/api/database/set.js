/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Set

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Set
 */
export default (path, value) => (
  new Promise((resolve, reject) => (
    firebase
      .database()
      .ref(path)
      .set(value, error => (
        error
          ? reject(error)
          : resolve()
      ))
  ))
);
