
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import md5 from 'md5';
import React, { Component, PropTypes } from 'react';

const Style = require('./style.scss'); // eslint-disable-line

/**
 *  Profile
 */
class Profile extends Component {
    static displayName = 'Profile';

    static propTypes = {
        displayName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    render () {
        const { displayName, email } = this.props;

        return (
            <div className="SidebarProfile">
                <div className="avatar">
                    <img src={`//www.gravatar.com/avatar/${md5(email)}?d=mm`} alt={displayName}/>
                </div>
                <div className="data">
                    <div className="display-name">{displayName}</div>
                    <div className="email">{email}</div>
                </div>
            </div>
        );
    }
}

// Export Profile
export default Profile;
