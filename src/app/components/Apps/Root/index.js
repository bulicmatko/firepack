
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Root

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

import AppWrap from '../../../../_lib/components/AppWrap';
import AppSidebar from '../../../../_lib/components/AppSidebar';
import AppMain from '../../../../_lib/components/AppMain';
import Menu from '../../../../_lib/components/Menu';
import config from '../../../../config';

/**
 *  Root
 */
class Root extends Component {

    render () {
        const { sidebarMenu } = config;

        return (
            <AppWrap>
                <AppSidebar menu={sidebarMenu}/>
                <AppMain>
                    <div>Hello :)</div>
                </AppMain>
            </AppWrap>
        );
    }

}

// Export Root
export default Root;
