/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Send Password Reset Email - Action

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { auth as FirebaseAuthApi } from '../../firebase/api';

import { AUTH } from '../../constants/actionTypes.const';

/**
 *  Send Password Reset Email
 */
export default email => dispatch => {
  dispatch({ type: AUTH.SEND_PASSWORD_RESET_EMAIL_START });

  FirebaseAuthApi.sendPasswordResetEmail(email)
    .then(() => (
      dispatch({ type: AUTH.SEND_PASSWORD_RESET_EMAIL_SUCCESS })
    ))
    .catch(({ code, message }) => {
      alert(`${code}\n\n${message}`); // eslint-disable-line

      dispatch({
        type: AUTH.SEND_PASSWORD_RESET_EMAIL_FAIL,
        payload: {
          code,
          message,
        },
      });
    });
};
