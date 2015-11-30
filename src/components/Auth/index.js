
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import SignInComponent from './SignIn';
import SignUpComponent from './SignUp';
import ResetPasswordComponent from './ResetPassword';

/**
 *  Route Constructor
 */
export default ({basePath = 'auth', onEnter = _.noop}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={SignInComponent}/>

            <Route path="sign-up" onEnter={onEnter} component={SignUpComponent}/>
            <Route path="sign-in" onEnter={onEnter} component={SignInComponent}/>
            <Route path="reset-password" onEnter={onEnter} component={ResetPasswordComponent}/>
        </Route>
    );
};
