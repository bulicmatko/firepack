
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Logo

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Style = require('./style.scss'); // eslint-disable-line

/**
 *  Logo
 */
class Logo extends Component {
    static displayName = 'Logo';

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        title: 'Firepack'
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    render () {
        return (
            <Link to="/" className="Logo">
                <i className="fa fa-fw fa-cube"></i>
                <span>{this.props.title}</span>
            </Link>
        );
    }
}

// Export Logo
export default Logo;
