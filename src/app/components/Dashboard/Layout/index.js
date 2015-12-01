
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Layout

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  Layout
 */
class Layout extends Component {

    render () {
        return (
            <div className="App">
                <div className="App--Sidebar">
                    <h3 className="title">
                        <i className="fa fa-fw fa-tachometer"></i>
                        <span>Dashboard</span>
                    </h3>
                </div>
                <div className="App--Main">
                    <h1>Dashboard</h1>
                    <p>Welcome to Dashboard.</p>
                </div>
            </div>
        );
    }

}

// Export Layout
export default Layout;
