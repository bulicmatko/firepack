
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    App Sidebar

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import Menu from '../Menu';

/**
 *  App Sidebar
 */
class AppSidebar extends Component {

    static propTypes = {
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        menu: PropTypes.array.isRequired
    };

    static defaultProps = {
        icon: 'question-circle',
        title: 'Unnamed App',
        menu: []
    };

    render () {
        const { icon, title, menu } = this.props;

        return (
            <div className="App--Sidebar">
                <h3 className="title">
                    <i className={`fa fa-fw fa-${icon}`}></i>
                    <span>{title}</span>
                </h3>
                <Menu menu={menu}/>
            </div>
        );
    }

}

// Export App Sidebar
export default AppSidebar;
