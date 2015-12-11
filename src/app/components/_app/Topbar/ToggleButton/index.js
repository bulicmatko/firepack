
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Toggle Button

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

const Style = require('./style.scss'); // eslint-disable-line

/**
 *  Toggle Button
 */
class ToggleButton extends Component {
    static displayName = 'ToggleButton';

    static propTypes = {
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: _.noop
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    _handleClick (e) {
        e.preventDefault();

        this.props.onClick();
    }

    render () {
        return (
            <button className="ToggleButton" onClick={this._handleClick.bind(this)}>
                <i className="fa fa-fw fa-bars"></i>
            </button>
        );
    }
}

// Export Toggle Button
export default ToggleButton;
