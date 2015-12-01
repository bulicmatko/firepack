
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import Services from '../services';

/**
 *  Profile Actions
 */
class ProfileActions {

    updateProfile (patch) {
        Services.ProfileServices.updateProfile(patch);
    }

}

// Export Profile Actions
export default new ProfileActions();
