
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Root

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

const Style = require('./style.scss');

/**
 *  Root
 */
class Root extends Component {
    static displayName = 'Root';

    render () {
        return (
            <div>
                <div className="App--Content root-page">
                    <h1>Settings</h1>
                    <p><i className="fa fa-fw fa-5x fa-cog"></i></p>
                    <br/><br/>
                    <p>Welcome to <strong>Firepack</strong> Settings.</p>
                </div>
            </div>
        );
    }
}

// Export Root
export default Root;
