/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container (Production)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import firebase from 'firebase';
import noop from 'lodash/noop';

import { APP, AUTH } from '../../../../constants/actionTypes.const';

import route from '../../../../utils/route.util';

/**
 *  Root Container
 */
@withRouter
export default class extends Component {
  static displayName = 'Firepack--RootContainer';

  static propTypes = {
    router: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    router: {},
    app: {},
    user: {},
    dispatch: noop,
    children: null,
  };

  static contextTypes = {
    firebaseConfig: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { router, dispatch } = this.props;
    const { firebaseConfig } = this.context;

    dispatch({ type: APP.SETUP });

    firebase.initializeApp(firebaseConfig);

    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch({
            type: AUTH.AUTHENTICATED,
            payload: {
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL,
              displayName: user.displayName,
              isAnonymous: user.isAnonymous,
              emailVerified: user.emailVerified,
            },
          });

          if (location.pathname.startsWith(route('auth'))) {
            router.replace({ pathname: route('root') });
          }
        } else {
          dispatch({ type: AUTH.UNAUTHENTICATED });

          if (!location.pathname.startsWith(route('auth'))) {
            router.replace({ pathname: route('auth') });
          }
        }
      });
  }

  render() {
    const { app, user, children } = this.props;

    return (
      <div className="Firepack--RootContainer">
        <div className="Firepack--RootContainer--Content">
          {
            !app.isReady || user.isAuthenticating
            ? <div className="Firepack--LoadingScreen">Please wait...</div>
            : children
          }
        </div>
      </div>
    );
  }
}
