
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile Services

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Dispatcher from '../../_lib/Dispatcher';
import ProfileEvents from '../../events/ProfileEvents';
import FirebaseCodes from '../../constants/FirebaseCodes';
import NotificationTypes from '../../constants/NotificationTypes';

/**
 *  Profile Services
 */
class ProfileServices {

    constructor (args) {
        this._DB = args.firebase;
    }

    updateProfile (patch) {
        Dispatcher.dispatch({
            event: ProfileEvents.PROFILE_UPDATE_STARTED
        });

        console.log('Profile Updated with:', patch);

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
