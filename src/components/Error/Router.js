
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import { Route } from 'react-router';

import Layout from './Layout';

/**
 *  Router
 */
const Router = ({basePath = '*'}) => {
    return <Route path={basePath} component={Layout}/>;
};

// Export Router
export default Router;
