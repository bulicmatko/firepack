
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    User Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import BaseStore from '../../../_lib/BaseStore';
import UserEvents from '../../events/UserEvents';

/**
 *  User Store
 */
class UserStore extends BaseStore {

    constructor (args) {
        super(args);

        this._user = {};

        // this._DB = args.firebase;
        this._DB.onAuth(this._handleAuth.bind(this));
    }

    _handleAuth (authData) {
        if (authData) {
            this._DB.child(`users/${authData.uid}`).on('value', (snapshot) => {
                this._user = snapshot.val();
                this._user.account = {
                    email: authData.password.email
                };

                this._emitChange();
            });
        }
    }

    getUser () {
        return this._user;
    }

    isUserGuest () {
        return !this.isUserAuthenticated();
    }

    isUserAuthenticated () {
        return this._DB.getAuth() ? true : false;
    }

    getAccountEmail () {
        return this._user.account.email;
    }

    getProfileFirstName () {
        return this._user.profile.name.first;
    }

    getProfileLastName () {
        return this._user.profile.name.last;
    }

}

// Export User Store
export default UserStore;
