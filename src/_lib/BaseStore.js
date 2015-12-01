
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Base Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Firebase from 'firebase';
import { EventEmitter } from 'events';
import Dispatcher from './Dispatcher';

// Data Change Event
const DATA_CHANGE = 'DATA_CHANGE';

/**
 *  Base Store
 */
class BaseStore extends EventEmitter {

    constructor (args) {
        super(args);

        const { firebaseUrl } = args;

        this._DB = new Firebase(firebaseUrl);
    }

    _onDispatcherEvent (callback) {
        this._dispatchToken = Dispatcher.register(callback);
    }

    _emitChange () {
        this.emit(DATA_CHANGE);
    }

    addDataChangeListener (callback) {
        this.addListener(DATA_CHANGE, callback);
    }

    removeDataChangeListener (callback) {
        this.removeListener(DATA_CHANGE, callback);
    }

}

// Export Base Store
export default BaseStore;
