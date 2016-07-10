/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Push

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import firebase from 'firebase';

/**
 *  Push
 */
export default (path, value) => (
  new Promise((resolve, reject) => (
    firebase
      .database()
      .ref(path)
      .push(value, error => (
        error
          ? reject(error)
          : resolve()
      ))
  ))
);
