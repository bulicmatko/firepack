
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Account Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import AccountServices from '../services/AccountServices.js';

/**
 *  Account Actions
 */
class AccountActions {

    createAccount (email, password) {
        AccountServices.createAccount(email, password);
    }

    changeAccountEmail (oldEmail, newEmail, password) {
        AccountServices.changeAccountEmail(oldEmail, newEmail, password);
    }

    changeAccountPassword (email, oldPassword, newPassword) {
        AccountServices.changeAccountPassword(email, oldPassword, newPassword);
    }

    resetAccountPassword (email) {
        AccountServices.resetAccountPassword(email);
    }

    deleteAccount (email, password) {
        AccountServices.deleteAccount(email, password);
    }

}

// Export Account Actions
export default new AccountActions();
