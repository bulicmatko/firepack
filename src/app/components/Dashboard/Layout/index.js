
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

import AppWrap from '../../../../_lib/components/AppWrap';
import AppMain from '../../../../_lib/components/AppMain';

const Style = require('./style.scss'); // eslint-disable-line

/**
 *  Layout
 */
class Layout extends Component {
    static displayName = 'Layout';

    render () {
        return (
            <AppWrap>
                <AppMain>
                    <div className="content">
                        <h1>Dashboard</h1>
                        <p>Welcome to Dashboard.</p>
                    </div>
                </AppMain>
            </AppWrap>
        );
    }
}

// Export Layout
export default Layout;
