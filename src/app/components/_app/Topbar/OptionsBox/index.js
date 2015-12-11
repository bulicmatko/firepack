
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Options Box

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, } from 'react';

const Style = require('./style.scss'); // eslint-disable-line

/**
 *  Options Box
 */
class OptionsBox extends Component {
    static displayName = 'OptionsBox';

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    render () {
        return (
            <ul className="OptionsBox">
                <li><button><i className="fa fa-fw fa-th"></i></button></li>
                <li><button><i className="fa fa-fw fa-comments-o"></i></button></li>
                <li><button><i className="fa fa-fw fa-check-square-o"></i></button></li>
                <li><button><i className="fa fa-fw fa-bell-o"></i></button></li>
            </ul>
        );
    }
}

// Export Options Box
export default OptionsBox;
