
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Stores - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import LayoutStore from './LayoutStore';
import NotificationsStore from './NotificationsStore';
import ResetPasswordStore from './ResetPasswordStore';
import SignInStore from './SignInStore';
import SignUpStore from './SignUpStore';
import UserStore from './UserStore';

const Stores = {};

export const initStores = ({firebase = null}) => {
    Stores.LayoutStore = new LayoutStore({firebase: firebase});
    Stores.NotificationsStore = new NotificationsStore({firebase: firebase});
    Stores.ResetPasswordStore = new ResetPasswordStore({firebase: firebase});
    Stores.SignInStore = new SignInStore({firebase: firebase});
    Stores.SignUpStore = new SignUpStore({firebase: firebase});
    Stores.UserStore = new UserStore({firebase: firebase});
};

export default Stores;
