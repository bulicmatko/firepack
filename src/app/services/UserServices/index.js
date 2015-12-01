
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    User Services

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import BaseService from '../../../_lib/BaseService';
import Dispatcher from '../../../_lib/Dispatcher';
import UserEvents from '../../events/UserEvents';
import FirebaseCodes from '../../constants/FirebaseCodes';
import NotificationTypes from '../../constants/NotificationTypes';

/**
 *  User Services
 */
class UserServices extends BaseService {

    constructor (args) {
        super(args);
    }

    authenticateUser (email, password) {
        Dispatcher.dispatch({
            event: UserEvents.USER_AUTHENTIFICATION_STARTED
        });

        this._DB.authWithPassword({email, password}, (error, authData) => {
            if (error) {
                switch (error.code) {
                    case FirebaseCodes.INVALID_EMAIL:
                        Dispatcher.dispatch({
                            event: UserEvents.USER_AUTHENTIFICATION_FAILED,
                            data: {
                                field: 'email',
                                message: 'Specified email is invalid.'
                            }
                        });
                        break;
                    case FirebaseCodes.INVALID_USER:
                        Dispatcher.dispatch({
                            event: UserEvents.USER_AUTHENTIFICATION_FAILED,
                            data: {
                                field: 'email',
                                message: 'Account with specified email does not exists.'
                            }
                        });
                        break;
                    case FirebaseCodes.INVALID_PASSWORD:
                        Dispatcher.dispatch({
                            event: UserEvents.USER_AUTHENTIFICATION_FAILED,
                            data: {
                                field: 'password',
                                message: 'Specified password is incorect.'
                            }
                        });
                        break;
                    case FirebaseCodes.NETWORK_ERROR:
                        Dispatcher.dispatch({
                            event: UserEvents.ACCOUNT_CREATION_FAILED,
                            data: {
                                field: null,
                                message: 'You are currently offline. Please check your internet connection.'
                            },
                            __notification: {
                                type: NotificationTypes.WARNING,
                                title: 'Offline',
                                message: 'You are currently offline. Please check your internet connection.'
                            }
                        });
                        break;
                    default:
                        Dispatcher.dispatch({
                            event: UserEvents.USER_AUTHENTIFICATION_FAILED,
                            data: {
                                field: null,
                                message: 'Unknown error occured.'
                            },
                            __notification: {
                                type: NotificationTypes.ERROR,
                                title: 'Unknown error',
                                message: 'Unknown error occured.'
                            }
                        });
                }
            } else {
                Dispatcher.dispatch({
                    event: UserEvents.USER_AUTHENTICATED,
                    data: {
                        field: null,
                        message: 'Your are successfully signed in.'
                    }
                });
            }
        });
    }

    unauthenticateUser () {
        Dispatcher.dispatch({
            event: UserEvents.USER_UNAUTHENTIFICATION_STARTED
        });

        this._DB.unauth();

        Dispatcher.dispatch({
            event: UserEvents.USER_UNAUTHENTICATED,
            __notification: {
                type: NotificationTypes.SUCCESS,
                title: 'Successfully signed out',
                message: 'You are successfully signed out.',
            }
        });
    }

}

// Export User Services
export default UserServices;
