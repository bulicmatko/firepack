
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile Services

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import BaseService from '../../../_lib/BaseService';
import Dispatcher from '../../../_lib/Dispatcher';
import ProfileEvents from '../../events/ProfileEvents';
import NotificationTypes from '../../constants/NotificationTypes';

/**
 *  Profile Services
 */
class ProfileServices extends BaseService {

    constructor (args) {
        super(args);
    }

    updateProfile (patch) {
        Dispatcher.dispatch({
            event: ProfileEvents.PROFILE_UPDATE_STARTED
        });

        console.log('Profile Updated with:', patch); // eslint-disable-line

        Dispatcher.dispatch({
            event: ProfileEvents.PROFILE_UPDATED,
            __notification: {
                type: NotificationTypes.SUCCESS,
                title: 'Profile successfully updated',
                message: 'Your profile has been successfully updated.'
            }
        });
    }

}

// Export Profile Services
export default ProfileServices;
