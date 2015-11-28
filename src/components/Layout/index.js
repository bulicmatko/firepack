
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

import TopbarComponent from './components/_app/Topbar/index';
import SidebarComponent from './components/_app/Sidebar/index';
import NotificationsComponent from './components/_app/Notifications/index';
import UserStore from './stores/UserStore';

/**
 *  Layout
 */
class Layout extends Component {

    _renderTopbar () {
        return UserStore.isUserAuthenticated()
            ? (
                <div className="Firebox--Topbar">
                    <TopbarComponent/>
                </div>
            ) : null;
    }

    _renderSidebar () {
        return UserStore.isUserAuthenticated()
            ? (
                <aside className="Firebox--Sidebar">
                    <SidebarComponent/>
                </aside>
            ) : null;
    }

    _renderMain () {
        return UserStore.isUserAuthenticated()
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
