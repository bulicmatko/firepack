/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import RootContainer from '../containers/RootContainer';
import AuthContainer from '../containers/AuthContainer';
import WorkspaceContainer from '../containers/WorkspaceContainer';

import AuthPage from '../components/pages/AuthPage';
import DashboardPage from '../components/pages/DashboardPage';

import route from '../utils/route.util';

/**
 *  Routes
 */
export default (routes) => ({
  path: route('root'),
  component: RootContainer,
  indexRoute: {
    onEnter: (nextState, replace) => (
      replace(route('auth'))
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
        },
      ],
    },
    {
      path: route('root'),
      component: WorkspaceContainer,
      childRoutes: [
        {
          path: route('dashboard'),
          component: DashboardPage,
        },
        ...routes,
      ],
    },
  ],
});
