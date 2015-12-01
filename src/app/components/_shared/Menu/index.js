
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Menu

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Style = require('./style.scss');

/**
 *  Menu
 */
class Menu extends Component {

    static propTypes = {
        menu: PropTypes.array.isRequired
    };

    render () {
        return (
            <div className="Menu">
                {this.props.menu.map((category, index) => {
                    return (
                        <div className="category" key={index}>
                            <h6 className="title">{category.title}</h6>
                            <ul className="items" key={index}>
                                {category.links.map((link, index) => {
                                    return (
                                        <li className="item" key={index}>
                                            <Link to={link.route} activeClassName="isActive">
                                                <i className={`fa fa-fw fa-${link.icon}`}></i>
                                                <span>{link.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }

}

// Export Menu
export default Menu;
