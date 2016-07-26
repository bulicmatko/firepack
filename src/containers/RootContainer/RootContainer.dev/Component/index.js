/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container (Development)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import firebase from 'firebase';
import noop from 'lodash/noop';

import DevTools from '../../../../components/dev/DevTools';

import { APP, AUTH } from '../../../../constants/actionTypes.const';

import route from '../../../../utils/route.util';

const { location } = window;

/**
 *  Root Container
 */
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
            : cloneElement(children, { key: location.pathname })
          }
        </div>
        <DevTools />
      </div>
    );
  }
}
