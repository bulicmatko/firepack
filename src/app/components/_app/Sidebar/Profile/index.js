
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import md5 from 'md5';
import React, { Component, PropTypes } from 'react';

// Style
const Style = require('./style.scss');

/**
 *  Profile
 */
class Profile extends Component {

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
