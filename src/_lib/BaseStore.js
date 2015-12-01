
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Base Store

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { EventEmitter } from 'events';
import Dispatcher from './Dispatcher';

// Data Change Event
const DATA_CHANGE = 'DATA_CHANGE';

/**
 *  Base Store
 */
class BaseStore extends EventEmitter {

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
