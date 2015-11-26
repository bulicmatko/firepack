
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firebase

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Firebase from 'firebase';

/**
 *  Firebase
 */

window.Firebase = new Firebase('https://fifa-tracker.firebaseio.com');

console.log('Test');

// Export Firebase
export default new Firebase('https://fifa-tracker.firebaseio.com');
