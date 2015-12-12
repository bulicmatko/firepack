
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

/**
 *  Layout
 */
class Layout extends Component {
    static displayName = 'Layout';

    static propTypes = {
        children: PropTypes.element
    };

    render () {
        return this.props.children;
    }
}

// Export Layout
export default Layout;
