/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Routes

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import RootContainer from '../containers/RootContainer';
import AuthContainer from '../containers/AuthContainer';
import WorkspaceContainer from '../containers/WorkspaceContainer';

import AuthPage from '../components/pages/AuthPage';

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
