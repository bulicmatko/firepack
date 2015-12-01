
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Menu

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React from 'react';
import { Link } from 'react-router';

/**
 *  Menu
 */
class Menu extends React.Component {

    static get propTypes () {
        return {
            menu: React.PropTypes.array.isRequired
        };
    }

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
                                                {link.title}
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
