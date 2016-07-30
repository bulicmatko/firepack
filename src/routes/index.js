/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import RootContainer from '../containers/RootContainer';
import AuthContainer from '../containers/AuthContainer';
import WorkspaceContainer from '../containers/WorkspaceContainer';

import AuthPage from '../components/pages/AuthPage';
import SignUpPage from '../components/pages/SignUpPage';
import SignInPage from '../components/pages/SignInPage';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';

import route from '../utils/route.util';

/**
 *  Routes
 */
export default (routes, indexRoute) => ({
  path: route('root'),
  component: RootContainer,
  indexRoute: {
    onEnter: (nextState, replace) => (
      replace(indexRoute)
    ),
  },
  childRoutes: [
    {
      path: route('root'),
      component: AuthContainer,
      childRoutes: [
        {
          path: route('auth'),
          component: AuthPage,
          indexRoute: {
            component: SignInPage,
          },
          childRoutes: [
            {
              path: route('auth.sign-up'),
              component: SignUpPage,
            },
            {
              path: route('auth.sign-in'),
              component: SignInPage,
            },
            {
              path: route('auth.reset-password'),
              component: ResetPasswordPage,
            },
          ],
        },
      ],
    },
    {
      path: route('root'),
      component: WorkspaceContainer,
      childRoutes: [
        ...routes,
      ],
    },
  ],
});
