
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import RootComponent from './Root/index';

/**
 *  Router
 */
const Router = ({basePath = 'apps', onEnter = _.noop, children = null}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={RootComponent}/>

            {children}
        </Route>
    );
};

// Export Router
export default Router;
