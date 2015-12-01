
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    User Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Services from '../services';

/**
 *  User Actions
 */
class UserActions {

    authenticateUser (email, password) {
        Services.UserServices.authenticateUser(email, password);
    }

    unauthenticateUser () {
        Services.UserServices.unauthenticateUser();
    }

}

// Export User Actions
export default new UserActions();
