
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import SignInComponent from './SignIn/index';
import SignUpComponent from './SignUp/index';
import ResetPasswordComponent from './ResetPassword/index';

/**
 *  Router
 */
const Router = ({basePath = 'auth', onEnter = _.noop}) => {
    return (
        <Route path={basePath} onEnter={onEnter} component={Layout}>
            <IndexRoute onEnter={onEnter} component={SignInComponent}/>

            <Route path="sign-up" onEnter={onEnter} component={SignUpComponent}/>
            <Route path="sign-in" onEnter={onEnter} component={SignInComponent}/>
            <Route path="reset-password" onEnter={onEnter} component={ResetPasswordComponent}/>
        </Route>
    );
};

// Export Router
export default Router;
