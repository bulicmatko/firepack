/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign Out - Action

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { auth as FirebaseAuthApi } from '../../firebase/api';

import { AUTH } from '../../constants/actionTypes.const';

/**
 *  Sign Out
 */
export default () => dispatch => {
  dispatch({ type: AUTH.SIGN_OUT_START });

  FirebaseAuthApi.signOut()
    .then(() => (
      dispatch({ type: AUTH.SIGN_OUT_SUCCESS })
    ))
    .catch(({ code, message }) => {
      alert(`${code}\n\n${message}`); // eslint-disable-line

      dispatch({
        type: AUTH.SIGN_OUT_FAIL,
        payload: {
          code,
          message,
        },
      });
    });
};
