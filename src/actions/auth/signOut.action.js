/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Sign Out - Action

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import signOut from '../../firebase/api/auth/signOut';

import { AUTH } from '../../constants/actionTypes.const';

/**
 *  Sign Out
 */
export default () => dispatch => {
  dispatch({ type: AUTH.SIGN_OUT_START });

  signOut()
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
