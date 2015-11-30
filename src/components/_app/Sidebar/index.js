
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Sidebar

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component } from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Profile from './Profile';

import Stores from '../../../stores';
import config from '../../../config';

const Style = require('./style.scss');

/**
 *  Sidebar
 */
class Sidebar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            user: Stores.UserStore.getUser()
        }

        this.__handleUserStoreDataChange = this._handleUserStoreDataChange.bind(this);
    }

    componentDidMount () {
        Stores.UserStore.addDataChangeListener(this.__handleUserStoreDataChange);
    }

    componentWillUnmount () {
        Stores.UserStore.removeDataChangeListener(this.__handleUserStoreDataChange);
    }

    _handleUserStoreDataChange () {
        this.setState({
            user: Stores.UserStore.getUser()
        });
    }

    _renderLogo () {
        return <Logo title="Firepack"/>;
    }

    _renderMenu () {
        let menu = [
            {
                title: 'Menu',
                links: [
                    {
                        icon: 'tachometer',
                        title: 'Dashboard',
                        route: '/dashboard'
                    }, {
                        icon: 'cog',
                        title: 'Settings',
                        route: '/settings'
                    }
                ]
            }
        ];

        menu.push(config.sidebarMenu);

        return (
            <Menu menu={menu}/>
        );
    }

    _renderProfile () {
        const user = {
            avatar: '/assets/images/users/bulicmatko.jpg',
            displayName: _.get(this.state.user, 'profile.name.first') + ' ' + _.get(this.state.user, 'profile.name.last'),
            email: _.get(this.state.user, 'account.email') + ''
        };

        return <Profile {...user}/>;
    }

    render () {
        return (
            <div className="Sidebar">
                <div className="Sidebar--Logo">
                    {this._renderLogo()}
                </div>
                <div className="Sidebar--Menu">
                    {this._renderMenu()}
                </div>
                <div className="Sidebar--Profile">
                    {this._renderProfile()}
                </div>
            </div>
        );
    }

}

// Export Sidebar
export default Sidebar;
