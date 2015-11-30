
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Main

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component } from 'react';
import {Stores1} from './stores';

const Style = require('./style.scss');

/**
 *  Main
 */
class Main extends Component {

    constructor (props) {
        super(props);

        this.state = {
            user: Stores1.UserStore.getUser()
        }

        this.__handleUserStoreDataChange = this._handleUserStoreDataChange.bind(this);
    }

    componentDidMount () {
        Stores1.UserStore.addDataChangeListener(this.__handleUserStoreDataChange);
    }

    componentWillUnmount () {
        Stores1.UserStore.removeDataChangeListener(this.__handleUserStoreDataChange);
    }

    _handleUserStoreDataChange () {
        this.setState({
            user: Stores1.UserStore.getUser()
        });
    }

    _renderToggleButton () {
        return (
            <div className="Main--ToggleButton">
                <ToggleButton onClick={() => console.log('Toggle Layout!')}/>
            </div>
        );
    }

    _renderSearchBox () {
        return (
            <div className="Main--SearchBox">
                <SearchBox onSubmit={val => console.log(val)}/>
            </div>
        );
    }

    _renderProfileBox () {
        const { user } = this.state;
        const profileData = {
            displayName: _.get(user, 'profile.name.first') + ' ' + _.get(user, 'profile.name.last'),
            email: _.get(user, 'account.email')
        };

        return (
            <div className="Main--ProfileBox">
                <ProfileBox {...profileData}/>
            </div>
        );
    }

    _renderOptionsBox () {
        return (
            <div className="Main--OptionsBox">
                <OptionsBox/>
            </div>
        );
    }

    render () {
        return (
            <div className="Main">
                {this._renderToggleButton()}
                {this._renderSearchBox()}
                {this._renderProfileBox()}
                {this._renderOptionsBox()}
            </div>
        );
    }

}

// Export Main
export default Main;
