
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

import { initStores } from './app/stores';
import { initServices } from './app/services';

import config from './config';
import App from './app';
import Menu from './app/components/_shared/Menu';

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

        initStores({firebaseUrl});
        initServices({firebaseUrl});

        return (
            <App appBasePath={appBasePath}>
                {this.props.children}
            </App>
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
