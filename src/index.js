
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
    }

    render() {
        return (
            <App {...this.props}>
                {this.props.children}
            </App>
        );
    }

}

// Export Firepack
export default Firepack;
