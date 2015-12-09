
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  Layout
 */
class Layout extends Component {
    static displayName = 'Layout';

    render () {
        return this.props.children;
    }
}

// Export Layout
export default Layout;
