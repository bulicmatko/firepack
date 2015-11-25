
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    User Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import UserServices from '../services/UserServices.js';

/**
 *  User Actions
 */
class UserActions {

    authenticateUser (email, password) {
        UserServices.authenticateUser(email, password);
    }

    unauthenticateUser () {
        UserServices.unauthenticateUser();
    }

}

// Export User Actions
export default new UserActions();
