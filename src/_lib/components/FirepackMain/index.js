
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App Main

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

/**
 *  App Main
 */
class AppMain extends Component {

    static propTypes = {
        children: PropTypes.element
    };

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
