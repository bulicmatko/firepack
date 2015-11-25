
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Sign Up Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import BaseStore from '../_lib/BaseStore';
import AccountEvents from '../events/AccountEvents';

/**
 *  Sign Up Store
 */
class SignUpStore extends BaseStore {

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
            case AccountEvents.ACCOUNT_CREATION_STARTED:
                this._resetError();
                this._setLoadingState(true);
                this._emitChange();
                break;
            case AccountEvents.ACCOUNT_CREATION_FAILED:
                this._setError(payload.data);
                this._setLoadingState(false);
                this._emitChange();
                break;
            case AccountEvents.ACCOUNT_CREATED:
                this._resetError();
                this._setLoadingState(false);
                this._emitChange();
                break;
        }
    }

}

// Export Sign Up Store
export default new SignUpStore();
