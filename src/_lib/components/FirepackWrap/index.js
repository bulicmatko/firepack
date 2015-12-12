
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App Wrap

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';

/**
 *  App Wrap
 */
class AppWrap extends Component {

    static propTypes = {
        children: PropTypes.element
    };

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
