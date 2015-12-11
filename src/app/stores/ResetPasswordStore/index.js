
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Reset Password Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import BaseStore from '../../../_lib/BaseStore';
import AccountEvents from '../../events/AccountEvents';

/**
 *  Reset Password Store
 */
class ResetPasswordStore extends BaseStore {

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

    _setError ({ field, message }) {
        this._data.error = { field, message };
    }

    _setLoadingState (state) {
        this._data.isLoading = state;
    }

    _handleDispatcherEvent (payload) {
        switch (payload.event) {
            case AccountEvents.PASSWORD_RESET_STARTED:
                this._resetError();
                this._setLoadingState(true);
                this._emitChange();
                break;
            case AccountEvents.PASSWORD_RESET_FAILED:
                this._setError(payload.data);
                this._setLoadingState(false);
                this._emitChange();
                break;
            case AccountEvents.PASSWORD_RESET:
                this._resetError();
                this._setLoadingState(false);
                this._emitChange();
                break;
            default:
                // Do nothing
                break;
        }
    }

}

// Export Reset Password Store
export default ResetPasswordStore;
