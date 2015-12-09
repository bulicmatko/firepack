
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile Box

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import md5 from 'md5';
import React, { Component, PropTypes } from 'react';

const Style = require('./style.scss');

/**
 *  Profile Box
 */
class ProfileBox extends Component {
    static displayName = 'ProfileBox';

    static propTypes = {
        displayName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    };

    static defaultProps = {
        displayName: '',
        email: ''
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    render () {
        const { displayName, email } = this.props;
        const gravatarUrl = `//www.gravatar.com/avatar/${md5(email)}?d=mm`;

        return (
            <div className="ProfileBox">
                <div className="avatar">
                    <img src={gravatarUrl} alt={displayName}/>
                </div>
                <div className="data">
                    <div className="display-name">{displayName}</div>
                    <div className="email">{email}</div>
                </div>
            </div>
        );
    }
}

// Export Profile Box
export default ProfileBox;
