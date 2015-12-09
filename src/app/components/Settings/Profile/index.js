
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  Profile
 */
class Profile extends Component {
    static displayName = 'Profile';

    render () {
        return (
            <div>
                <div className="App--Topbar">
                    <h1 className="title">
                        <i className="fa fa-fw fa-user"></i>
                        <span>Profile</span>
                    </h1>
                </div>
                <div className="App--Content">
                    <h3>Profile</h3>
                    <p>Welcome to Profile.</p>
                </div>
            </div>
        );
    }
}

// Export Profile
export default Profile;
