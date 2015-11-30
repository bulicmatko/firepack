
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    User Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// import UserServices from '../services/UserServices/';
import {Services} from '../services';

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
