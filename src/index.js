
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

import { initStores } from './app/stores';
import { initServices } from './app/services';

import App from './app';

export { default as AppWrap } from './_lib/components/AppWrap';
export { default as AppSidebar } from './_lib/components/AppSidebar';
export { default as AppMain } from './_lib/components/AppMain';

/**
 *  Firepack
 */
class Firepack extends Component {

    constructor (props) {
        super(props);

        const { firebaseUrl } = props;

        initStores({firebaseUrl});
        initServices({firebaseUrl});

        // this.childContext = {
        //     appBasePath: props.appBasePath
        // };
    }

    // static contextTypes = {
    //     color: React.PropTypes.string
    // };

    static childContextTypes = {
        appBasePath: React.PropTypes.string
    };

    getChildContext () {
        return {
            appBasePath: this.props.appBasePath
        };
    }

    static propTypes = {
        appBasePath: PropTypes.string.isRequired,
        firebaseUrl: PropTypes.string.isRequired,
        sidebarMenu: PropTypes.array.isRequired
    };

    // static defaultProps = {
    //     appBasePath: '',
    //     firebaseUrl: undefined,
    //     sidebarMenu: []
    // };

    render() {
        return (
            <App>
                {this.props.children}
            </App>
        );
    }

}

// Export Firepack
export default Firepack;
