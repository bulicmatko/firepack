
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firebase

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Firebase from 'firebase';

import Config from '../Config';

/**
 *  Firebase
 */

console.log(Config);
setTimeout(() => console.log(Config), 5000);

window.Firebase = new Firebase(Config.firebaseUrl);

// Export Firebase
export default new Firebase(Config.firebaseUrl);
