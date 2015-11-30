
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Services - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import AccountServices from './AccountServices';
import ProfileServices from './ProfileServices';
import UserServices from './UserServices';

const Services = {};

export const initServices = ({firebase = null}) => {
    Services.AccountServices = new AccountServices({firebase: firebase});
    Services.ProfileServices = new ProfileServices({firebase: firebase});
    Services.UserServices = new UserServices({firebase: firebase});
};

export default Services;
