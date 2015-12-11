
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
        return (
            <div className="App">
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h1>
                        <i className="fa fa-fw fa-exclamation-triangle"></i>
                        <span style={{ marginLeft: '15px' }}>Error 404</span>
                    </h1>
                    <p>The page you are looking for does not exists.</p>
                </div>
            </div>
        );
    }
}

// Export Layout
export default Layout;
