
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Base Service

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Firebase from 'firebase';
import Dispatcher from './Dispatcher';

/**
 *  Base Services
 */
class BaseService {

    constructor (args) {
        const { firebaseUrl } = args;

        this._DB = new Firebase(firebaseUrl);
    }

}

// Export Base Service
export default BaseService;
