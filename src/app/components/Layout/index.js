
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

import TopbarComponent from '../_app/Topbar';
import SidebarComponent from '../_app/Sidebar';
import NotificationsComponent from '../_app/Notifications';
import Stores from '../../stores';

/**
 *  Layout
 */
class Layout extends Component {
    static displayName = 'Layout';

    static propTypes = {
        children: PropTypes.element
    };

    constructor (props) {
        super(props);

        this.UserStore = Stores.UserStore;
    }

    _renderTopbar () {
        return this.UserStore.isUserAuthenticated()
            ? (
                <div className="Firepack--Topbar">
                    <TopbarComponent/>
                </div>
            ) : null;
    }

    _renderSidebar () {
        return this.UserStore.isUserAuthenticated()
            ? (
                <aside className="Firepack--Sidebar">
                    <SidebarComponent/>
                </aside>
            ) : null;
    }

    _renderMain () {
        return this.UserStore.isUserAuthenticated()
            ? (
                <div className="Firepack--Main">
                    {this.props.children}
                </div>
            ) : (
                <div className="Firepack--Auth">
                    {this.props.children}
                </div>
            );
    }

    render () {
        return (
            <div className="Firepack">
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
