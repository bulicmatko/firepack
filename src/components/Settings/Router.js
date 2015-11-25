
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import RootComponent from './Root/index';
import AccountComponent from './Account/index';
import ProfileComponent from './Profile/index';

/**
 *  Router
 */
const Router = ({basePath = 'settings', onEnter = _.noop}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={RootComponent}/>

            <Route path="account" onEnter={onEnter} component={AccountComponent}/>
            <Route path="profile" onEnter={onEnter} component={ProfileComponent}/>
        </Route>
    );
};

// Export Router
export default Router;
