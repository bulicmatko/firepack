
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
// import { createHistory } from 'history';
import createHistory from 'history/lib/createHashHistory';
import { Router, Route, Redirect } from 'react-router';

import Layout from './components/Layout';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Apps from './components/Apps';
import Error404 from './components/Error404';

import Stores from './stores';

const Style = require('../_lib/styles/main.scss');

/**
 *  App
 */
class App extends Component {

    static propTypes = {
        appBasePath: PropTypes.string.isRequired,
        sidebarMenu: PropTypes.array.isRequired
    };

    static defaultProps = {
        appBasePath: '',
        sidebarMenu: []
    };

    static childContextTypes = {
        appBasePath: PropTypes.string.isRequired,
        sidebarMenu: PropTypes.array.isRequired
    };

    getChildContext () {
        return {
            appBasePath: this.props.appBasePath,
            sidebarMenu: this.props.sidebarMenu
        };
    }

    _userShouldBeGuest (nextState, replaceState) {
        let { appBasePath } = this.props;

        if (appBasePath === '/') {
            appBasePath = '';
        }

        if (!Stores.UserStore.isUserGuest()) {
            replaceState({}, `${appBasePath}/dashboard`);
        }
    }

    _userShouldBeAuthenticated (nextState, replaceState) {
        let { appBasePath } = this.props;

        if (appBasePath === '/') {
            appBasePath = '';
        }

        if (!Stores.UserStore.isUserAuthenticated()) {
            replaceState({nextPathname: nextState.location.pathname}, `${appBasePath}/auth`);
        }
    }

    render() {
        let { appBasePath } = this.props;

        if (appBasePath === '') {
            appBasePath = '/';
        }

        return (
            <Router history={createHistory({queryKey: false})}>
                <Redirect from={appBasePath} to={`${appBasePath}/auth`}/>

                <Route path={appBasePath} component={Layout}>
                    {Auth({basePath: 'auth', onEnter: this._userShouldBeGuest.bind(this)})}

                    {Dashboard({basePath: 'dashboard', onEnter: this._userShouldBeAuthenticated.bind(this)})}
                    {Settings({basePath: 'settings', onEnter: this._userShouldBeAuthenticated.bind(this)})}

                    {Apps({basePath: 'apps', onEnter: this._userShouldBeAuthenticated.bind(this), children: this.props.children})}

                    {Error404({basePath: '*', onEnter: this._userShouldBeAuthenticated.bind(this)})}
                </Route>
            </Router>
        );
    }

}

// Export App
export default App;
