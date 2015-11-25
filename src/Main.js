
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Main

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';
import { createHistory } from 'history';
import { Router, Route, Redirect } from 'react-router';

import Layout from './Layout';
import AuthRouter from './components/Auth/Router';
import DashboardRouter from './components/Dashboard/Router';
import SettingsRouter from './components/Settings/Router';
import AppsRouter from './components/Apps/Router';
import ErrorRouter from './components/Error/Router';
import UserStore from './stores/UserStore';

const Style = require('./_lib/styles/main.scss');

/**
 *  Main
 */
class Main extends Component {

    _userShouldBeGuest (nextState, replaceState) {
        if (!UserStore.isUserGuest()) {
            replaceState({}, '/dashboard');
        }
    }

    _userShouldBeAuthenticated (nextState, replaceState) {
        if (!UserStore.isUserAuthenticated()) {
            replaceState({nextPathname: nextState.location.pathname}, '/auth');
        }
    }

    render() {
        return (
            <Router history={createHistory()}>
                <Redirect from="/" to="/auth"/>

                <Route path="/" component={Layout}>
                    {AuthRouter({basePath: 'auth', onEnter: this._userShouldBeGuest})}

                    {DashboardRouter({basePath: 'dashboard', onEnter: this._userShouldBeAuthenticated})}
                    {SettingsRouter({basePath: 'settings', onEnter: this._userShouldBeAuthenticated})}

                    {AppsRouter({basePath: 'apps', onEnter: this._userShouldBeAuthenticated, children: this.props.children})}

                    {ErrorRouter({basePath: '*'})}
                </Route>
            </Router>
        );
    }

}

// Export Main
export default Main;
