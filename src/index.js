
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

import { initStores } from './app/stores';
import { initServices } from './app/services';

import config from './config';
import App from './app';

import _AppWrap from './_lib/components/AppWrap';
import _AppSidebar from './_lib/components/AppSidebar';
import _AppMain from './_lib/components/AppMain';

/**
 *  Firepack
 */
class Firepack extends Component {

    static propTypes = {
        appBasePath: PropTypes.string.isRequired,
        firebaseUrl: PropTypes.string.isRequired,
        sidebarMenu: PropTypes.array.isRequired
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

export const AppWrap = _AppWrap;
export const AppSidebar = _AppSidebar;
export const AppMain = _AppMain;

// Export Firepack
export default Firepack;
