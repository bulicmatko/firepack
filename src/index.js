
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import Firebase from 'firebase';

import { initStores } from './stores';
import { initServices } from './services';

import config from './config';
import Main from './Main';
import Menu from './components/_shared/Menu';

/**
 *  Firepack
 */
class Firepack extends Component {

    static propTypes = {
        appBasePath: PropTypes.string.isRequired,
        firebaseUrl: PropTypes.string.isRequired,
        sidebarMenu: PropTypes.object.isRequired
    };

    static defaultProps = {
        appBasePath: '',
        firebaseUrl: undefined,
        sidebarMenu: []
    };

    render() {
        const { appBasePath, firebaseUrl, sidebarMenu } = this.props;

        config.appBasePath = appBasePath;
        config.firebaseUrl = firebaseUrl;
        config.sidebarMenu = sidebarMenu;

        const firebase = new Firebase(firebaseUrl);

        initStores({firebase});
        initServices({firebase});

        return (
            <Main appBasePath={appBasePath}>
                {this.props.children}
            </Main>
        );
    }

}


// export Dispatcher;
// export BaseStore;


// export AppWrap;
export const SidebarMenu = Menu;
// export AppMain;

// Export Firepack
export default Firepack;
