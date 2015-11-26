
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firebase

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Firebase from 'firebase';

import Config from '../Config';

/**
 *  Firebase
 */

console.log(Config.firebaseUrl);
setTimeout(() => console.log(Config.firebaseUrl), 1000);

window.Firebase = new Firebase(Config.firebaseUrl);

// Export Firebase
export default new Firebase(Config.firebaseUrl);
