
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Topbar

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import _ from 'lodash';
import React, { Component } from 'react';

import ToggleButton from './ToggleButton';
import SearchBox from './SearchBox';
import OptionsBox from './OptionsBox';
import ProfileBox from './ProfileBox';
import Stores from '../../../stores';

const Style = require('./style.scss');

/**
 *  Topbar
 */
class Topbar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            user: Stores.UserStore.getUser()
        }

        this.__handleUserStoreDataChange = this._handleUserStoreDataChange.bind(this);
    }

    componentDidMount () {
        Stores.UserStore.addDataChangeListener(this.__handleUserStoreDataChange);
    }

    componentWillUnmount () {
        Stores.UserStore.removeDataChangeListener(this.__handleUserStoreDataChange);
    }

    _handleUserStoreDataChange () {
        this.setState({
            user: Stores.UserStore.getUser()
        });
    }

    _renderToggleButton () {
        return (
            <div className="Topbar--ToggleButton">
                <ToggleButton onClick={() => console.log('Toggle Layout!')}/>
            </div>
        );
    }

    _renderSearchBox () {
        return (
            <div className="Topbar--SearchBox">
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
            <div className="Topbar--ProfileBox">
                <ProfileBox {...profileData}/>
            </div>
        );
    }

    _renderOptionsBox () {
        return (
            <div className="Topbar--OptionsBox">
                <OptionsBox/>
            </div>
        );
    }

    render () {
        return (
            <div className="Topbar">
                {this._renderToggleButton()}
                {this._renderSearchBox()}
                {this._renderProfileBox()}
                {this._renderOptionsBox()}
            </div>
        );
    }

}

// Export Topbar
export default Topbar;
