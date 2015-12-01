
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App Wrap

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component } from 'react';

/**
 *  App Wrap
 */
class AppWrap extends Component {

    render () {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }

}

// Export App Wrap
export default AppWrap;
