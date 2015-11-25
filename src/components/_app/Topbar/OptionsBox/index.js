
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Options Box

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

const Style = require('./style.scss');

/**
 *  Options Box
 */
class OptionsBox extends Component {

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
