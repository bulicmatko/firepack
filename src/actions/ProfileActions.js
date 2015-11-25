
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Profile Actions

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Imports
import ProfileServices from '../services/ProfileServices.js';

/**
 *  Profile Actions
 */
class ProfileActions {

    updateProfile (patch) {
        ProfileServices.updateProfile(patch);
    }

}

// Export Profile Actions
export default new ProfileActions();
