
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

import Menu from '../_shared/Menu';

/**
 *  Layout
 */
class Layout extends Component {

    render () {
        return (
            <div className="App">
                <div className="App--Sidebar">
                    <h3 className="title">
                        <i className="fa fa-fw fa-cog"></i>
                        <span>Settings</span>
                    </h3>
                    <Menu menu={
                        [
                            {
                                title: 'Menu',
                                links: [
                                    {
                                        icon: 'key',
                                        title: 'Account',
                                        route: '/settings/account'
                                    }, {
                                        icon: 'user',
                                        title: 'Profile',
                                        route: '/settings/profile'
                                    }, {
                                        icon: 'dollar',
                                        title: 'Billing',
                                        route: '/settings/billing'
                                    }, {
                                        icon: 'bell',
                                        title: 'Notifications',
                                        route: '/settings/notifications'
                                    }, {
                                        icon: 'rocket',
                                        title: 'Applications',
                                        route: '/settings/applications'
                                    }, {
                                        icon: 'lock',
                                        title: 'Security',
                                        route: '/settings/security'
                                    }, {
                                        icon: 'ban',
                                        title: 'Delete account',
                                        route: '/settings/delete-account'
                                    }
                                ]
                            }
                        ]
                    }/>
                </div>
                <div className="App--Main">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

// Export Layout
export default Layout;
