
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Main

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { createHistory } from 'history';
import { Router, Route, Redirect } from 'react-router';

import Layout from './components/Layout';
import AuthRouter from './components/Auth/Router';
import DashboardRouter from './components/Dashboard/Router';
import SettingsRouter from './components/Settings/Router';
import AppsRouter from './components/Apps/Router';
import ErrorRouter from './components/Error/Router';

import Stores from './stores';

const Style = require('./_lib/styles/main.scss');

/**
 *  Main
 */
class Main extends Component {

    constructor (props) {
        super(props);

        this.UserStore = Stores.UserStore;
    }

    static propTypes = {
        appBasePath: PropTypes.string.isRequired,
    };

    static defaultProps = {
        appBasePath: '',
    };

    _userShouldBeGuest (nextState, replaceState) {
        const { appBasePath } = this.props;

        if (!this.UserStore.isUserGuest()) {
            replaceState({}, `${appBasePath}/dashboard`);
        }
    }

    _userShouldBeAuthenticated (nextState, replaceState) {
        const { appBasePath } = this.props;

        if (!this.UserStore.isUserAuthenticated()) {
            replaceState({nextPathname: nextState.location.pathname}, `${appBasePath}/auth`);
        }
    }

    render() {
        const { appBasePath } = this.props;

        return (
            <Router history={createHistory()}>
                <Redirect from={appBasePath} to={`${appBasePath}/auth`}/>

                <Route path={appBasePath} component={Layout}>
                    {AuthRouter({basePath: 'auth', onEnter: this._userShouldBeGuest.bind(this)})}

                    {DashboardRouter({basePath: 'dashboard', onEnter: this._userShouldBeAuthenticated.bind(this)})}
                    {SettingsRouter({basePath: 'settings', onEnter: this._userShouldBeAuthenticated.bind(this)})}

                    {AppsRouter({basePath: 'apps', onEnter: this._userShouldBeAuthenticated.bind(this), children: this.props.children})}

                    {ErrorRouter({basePath: '*', onEnter: this._userShouldBeAuthenticated.bind(this)})}
                </Route>
            </Router>
        );
    }

}

// Export Main
export default Main;
