
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import { Route } from 'react-router';

import Layout from './Layout';

/**
 *  Route Constructor
 */
export default ({basePath = '*'}) => {
    return <Route path={basePath} component={Layout}/>;
};
