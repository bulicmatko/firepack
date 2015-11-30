
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import Firebase from 'firebase';

import { initStores } from './stores';
import { initServices } from './services';

import Main from './Main';

/**
 *  Firepack
 */
class Firepack extends Component {

    // constructor (props) {
    //     super(props);

    //     const firebase = new Firebase(props.firebaseUrl);

    //     initStores(firebase);
    //     initServices(firebase);
    // }

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
        const { appBasePath, firebaseUrl } = this.props;

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

// Export Firepack
export default Firepack;
