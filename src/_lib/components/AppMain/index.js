
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App Main

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

const Style = require('./style.scss');

/**
 *  App Main
 */
class AppMain extends Component {

    render () {
        return (
            <div className="App--Main">
                {this.props.children}
            </div>
        );
    }

}

// Export App Main
export default AppMain;
