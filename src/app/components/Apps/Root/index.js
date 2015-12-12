
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Root

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

import AppWrap from '../../../../_lib/components/AppWrap';
import AppSidebar from '../../../../_lib/components/AppSidebar';
import AppMain from '../../../../_lib/components/AppMain';

/**
 *  Root
 */
class Root extends Component {
    static displayName = 'Root';

    static contextTypes = {
        sidebarMenu: PropTypes.array.isRequired
    };

    render () {
        return (
            <AppWrap>
                <AppSidebar menu={this.context.sidebarMenu}/>
                <AppMain>
                    <div>Hello :)</div>
                </AppMain>
            </AppWrap>
        );
    }
}

// Export Root
export default Root;
