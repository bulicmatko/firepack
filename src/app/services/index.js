
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Services - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import AccountServices from './AccountServices';
import ProfileServices from './ProfileServices';
import UserServices from './UserServices';

const Services = {};

export const initServices = ({firebaseUrl = null}) => {
    Services.AccountServices = new AccountServices({firebaseUrl: firebaseUrl});
    Services.ProfileServices = new ProfileServices({firebaseUrl: firebaseUrl});
    Services.UserServices = new UserServices({firebaseUrl: firebaseUrl});
};

export default Services;
