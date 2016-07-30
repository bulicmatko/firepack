/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Firebase Api - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import createUserWithEmailAndPassword from './auth/createUserWithEmailAndPassword';
import signInWithEmailAndPassword from './auth/signInWithEmailAndPassword';
import sendPasswordResetEmail from './auth/sendPasswordResetEmail';
import signInWithPopup from './auth/signInWithPopup';
import signOut from './auth/signOut';

export const auth = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
};

export default {
  auth,
};
