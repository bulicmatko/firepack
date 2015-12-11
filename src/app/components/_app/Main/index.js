
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Main

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// import _ from 'lodash';
import React, { Component } from 'react';
import { Stores } from './stores';

const Style = require('./style.scss'); // eslint-disable-line

/**
 *  Main
 */
class Main extends Component {
    static displayName = 'Main';

    constructor (props) {
        super(props);

        this.state = {
            user: Stores.UserStore.getUser()
        };

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

    // _renderToggleButton () {
    //     return (
    //         <div className="Main--ToggleButton">
    //             <ToggleButton/>
    //         </div>
    //     );
    // }

    // _renderSearchBox () {
    //     return (
    //         <div className="Main--SearchBox">
    //             <SearchBox/>
    //         </div>
    //     );
    // }

    // _renderProfileBox () {
    //     const { user } = this.state;
    //     const profileData = {
    //         displayName: _.get(user, 'profile.name.first') + ' ' + _.get(user, 'profile.name.last'),
    //         email: _.get(user, 'account.email')
    //     };

    //     return (
    //         <div className="Main--ProfileBox">
    //             <ProfileBox {...profileData}/>
    //         </div>
    //     );
    // }

    // _renderOptionsBox () {
    //     return (
    //         <div className="Main--OptionsBox">
    //             <OptionsBox/>
    //         </div>
    //     );
    // }

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
