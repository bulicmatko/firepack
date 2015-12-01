
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Sign In Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import BaseStore from '../../../_lib/BaseStore';
import UserEvents from '../../events/UserEvents';

/**
 *  Sign In Store
 */
class SignInStore extends BaseStore {

    constructor (args) {
        super(args);

        this._data = {
            error: {},
            isLoading: false
        };

        this._onDispatcherEvent(this._handleDispatcherEvent.bind(this));
    }

    reset () {
        this._data = {
            error: {},
            isLoading: false
        };
    }

    getError () {
        return this._data.error;
    }

    getLoadingState () {
        return this._data.isLoading;
    }

    _resetError () {
        this._data.error = {};
    }

    _setError ({field, message}) {
        this._data.error = {field, message};
    }

    _setLoadingState (state) {
        this._data.isLoading = state;
    }

    _handleDispatcherEvent (payload) {
        switch (payload.event) {
            case UserEvents.USER_AUTHENTIFICATION_STARTED:
                this._resetError();
                this._setLoadingState(true);
                this._emitChange();
                break;
            case UserEvents.USER_AUTHENTIFICATION_FAILED:
                this._setError(payload.data);
                this._setLoadingState(false);
                this._emitChange();
                break;
            case UserEvents.USER_AUTHENTICATED:
                this._resetError();
                this._setLoadingState(false);
                this._emitChange();
                break;
        }
    }

}

// Export Sign In Store
export default SignInStore;
