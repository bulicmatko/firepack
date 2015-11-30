
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Account Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Services from '../services';

/**
 *  Account Actions
 */
class AccountActions {

    createAccount (email, password) {
        Services.AccountServices.createAccount(email, password);
    }

    changeAccountEmail (oldEmail, newEmail, password) {
        Services.AccountServices.changeAccountEmail(oldEmail, newEmail, password);
    }

    changeAccountPassword (email, oldPassword, newPassword) {
        Services.AccountServices.changeAccountPassword(email, oldPassword, newPassword);
    }

    resetAccountPassword (email) {
        Services.AccountServices.resetAccountPassword(email);
    }

    deleteAccount (email, password) {
        Services.AccountServices.deleteAccount(email, password);
    }

}

// Export Account Actions
export default new AccountActions();
