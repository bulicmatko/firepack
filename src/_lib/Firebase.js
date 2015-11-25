
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Firebase

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import Firebase from 'firebase';

/**
 *  Firebase
 */

window.Firebase = new Firebase('https://fifa-tracker.firebaseio.com');

// Export Firebase
export default new Firebase('https://fifa-tracker.firebaseio.com');
