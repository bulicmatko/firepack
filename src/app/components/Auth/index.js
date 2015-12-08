
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Auth - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

/**
 *  Route Constructor
 */
export default ({basePath = 'auth', onEnter = _.noop}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={SignIn}/>

            <Route path="sign-up" onEnter={onEnter} component={SignUp}/>
            <Route path="sign-in" onEnter={onEnter} component={SignIn}/>
            <Route path="reset-password" onEnter={onEnter} component={ResetPassword}/>
        </Route>
    );
};
