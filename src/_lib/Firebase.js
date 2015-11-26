
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firebase

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Firebase from 'firebase';

import Config from '../Config';

/**
 *  Firebase
 */

window.Firebase = new Firebase(Config.firebaseUrl);

// Export Firebase
export default new Firebase(Config.firebaseUrl);
