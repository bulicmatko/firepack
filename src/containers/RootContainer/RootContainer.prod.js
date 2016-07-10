/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container (Development)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes, cloneElement } from 'react';
import cssModules from 'react-css-modules';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import firebase from 'firebase';
import pick from 'lodash/pick';
import noop from 'lodash/noop';

import getApp from '../../selectors/app';
import getUser from '../../selectors/user';

import route from '../../utils/route.util';

import styles from './styles';

import { APP, AUTH } from '../../constants/actionTypes.const';

const { location } = window;

/**
 *  Root Container
 */
@cssModules(styles)
class RootContainer extends Component {
  static displayName = 'RootContainer';

  static propTypes = {
    router: PropTypes.object.isRequired,
    app: PropTypes.shape({
      isReady: PropTypes.bool.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      isAuthenticating: PropTypes.bool.isRequired,
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
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
            router.replace({ pathname: route('dashboard') });
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
      <div styleName="RootContainer">
        <div styleName="RootContainer--Content">
          {
            !app.isReady || user.isAuthenticating
            ? <div styleName="loading-screen">Please wait...</div>
            : cloneElement(children, { key: location.pathname })
          }
        </div>
      </div>
    );
  }
}

/**
 *  Connector
 */
export default connect(
  state => ({
    app: pick(getApp(state), 'isReady'),
    user: pick(getUser(state), 'isAuthenticating', 'isAuthenticated'),

  }),
  dispatch => ({
    dispatch: action => dispatch(action),
  })
)(withRouter(RootContainer));
