
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Search Box

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

const Style = require('./style.scss');

/**
 *  Search Box
 */
class SearchBox extends Component {
    static displayName = 'SearchBox';

    static propTypes = {
        placeholder: PropTypes.string,
        onSubmit: PropTypes.func
    };

    static defaultProps = {
        placeholder: 'Search...',
        onSubmit: _.noop
    };

    shouldComponentUpdate (nextProps) {
        return this.props !== nextProps;
    }

    _handleSubmit (e) {
        e.preventDefault();

        this.props.onSubmit(this.refs.input.value);
    }

    render () {
        const { placeholder } = this.props;

        return (
            <form className="SearchBox" onSubmit={this._handleSubmit.bind(this)}>
                <input type="search" name="query" placeholder={placeholder} ref="input"/>
                <button type="submit"><i className="fa fa-fw fa-search"></i></button>
            </form>
        );
    }
}

// Export Search Box
export default SearchBox;
