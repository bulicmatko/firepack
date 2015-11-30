
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

import TopbarComponent from '../_app/Topbar/index';
import SidebarComponent from '../_app/Sidebar/index';
import NotificationsComponent from '../_app/Notifications/index';
// import UserStore from '../../stores/UserStore';
import Stores from '../../stores';

/**
 *  Layout
 */
class Layout extends Component {

    constructor (props) {
        super(props);

        this.UserStore = Stores.UserStore;
    }

    _renderTopbar () {
        return this.UserStore.isUserAuthenticated()
            ? (
                <div className="Firebox--Topbar">
                    <TopbarComponent/>
                </div>
            ) : null;
    }

    _renderSidebar () {
        return this.UserStore.isUserAuthenticated()
            ? (
                <aside className="Firebox--Sidebar">
                    <SidebarComponent/>
                </aside>
            ) : null;
    }

    _renderMain () {
        return this.UserStore.isUserAuthenticated()
            ? (
                <div className="Firebox--Main">
                    {this.props.children}
                </div>
            ) : (
                <div className="Firebox--Auth">
                    {this.props.children}
                </div>
            );
    }

    render () {
        return (
            <div className="Firebox">
                {this._renderTopbar()}
                {this._renderSidebar()}
                {this._renderMain()}
                <NotificationsComponent/>
            </div>
        );
    }

}

// Export Layout
export default Layout;
