/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Create User With Email And Password - Action

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { auth as FirebaseAuthApi } from '../../firebase/api';

import { AUTH } from '../../constants/actionTypes.const';

/**
 *  Create User With Email And Password
 */
export default (email, password) => dispatch => {
  dispatch({ type: AUTH.CREATE_USER_WITH_EMAIL_AND_PASSWORD_START });

  FirebaseAuthApi.createUserWithEmailAndPassword(email, password)
    .then(() => (
      dispatch({ type: AUTH.CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS })
    ))
    .catch(({ code, message }) => {
      alert(`${code}\n\n${message}`); // eslint-disable-line

      dispatch({
        type: AUTH.CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL,
        payload: {
          code,
          message,
        },
      });
    });
};
