
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Settings - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import Root from './Root';
import Account from './Account';
import Profile from './Profile';

/**
 *  Route Constructor
 */
export default ({basePath = 'settings', onEnter = _.noop}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={Root}/>

            <Route path="account" onEnter={onEnter} component={Account}/>
            <Route path="profile" onEnter={onEnter} component={Profile}/>
        </Route>
    );
};
