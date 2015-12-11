
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Router

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React from 'react';
import { Route } from 'react-router';

import Layout from './Layout';

/**
 *  Route Constructor
 */
export default({ basePath = 'dashboard', onEnter = _.noop }) => {
    return <Route path={basePath} onEnter={onEnter} component={Layout}/>;
};
