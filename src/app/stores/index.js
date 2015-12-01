
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

export const initStores = ({firebaseUrl = null}) => {
    Stores.LayoutStore = new LayoutStore({firebaseUrl: firebaseUrl});
    Stores.NotificationsStore = new NotificationsStore({firebaseUrl: firebaseUrl});
    Stores.ResetPasswordStore = new ResetPasswordStore({firebaseUrl: firebaseUrl});
    Stores.SignInStore = new SignInStore({firebaseUrl: firebaseUrl});
    Stores.SignUpStore = new SignUpStore({firebaseUrl: firebaseUrl});
    Stores.UserStore = new UserStore({firebaseUrl: firebaseUrl});
};

export default Stores;
