/* eslint-env browser */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Menu

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { IndexLink } from 'react-router';

import styles from './styles';

/**
 *  Menu
 */
@cssModules(styles)
export default class extends Component {
  static displayName = 'Menu';

  static propTypes = {
    menu: PropTypes.array.isRequired,
  };

  static defaultProps = {
    menu: [],
  };

  render() {
    const { menu } = this.props;

    return (
      <div styleName="Menu">
        {menu.map((category, key) => (
          <div styleName="category" key={key}>
            <h6 styleName="title">{category.title}</h6>
            <ul styleName="items" key={key}>
              {category.links.map((link, index) => (
                <li styleName="item" key={index}>
                  <IndexLink to={link.route} activeClassName="isActive">
                    <i className={`fa fa-fw fa-${link.icon}`}></i>
                    <span>{link.title}</span>
                  </IndexLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
