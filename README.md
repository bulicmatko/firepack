# Firepack
> Auth wrapper for [Firebase](https://firebase.google.com/) applications built with [React](https://facebook.github.io/react/),
[React router](https://github.com/reactjs/react-router) and [Redux](http://redux.js.org/)

[![Build Status](https://img.shields.io/travis/bulicmatko/firepack.svg?style=flat-square)](https://travis-ci.org/bulicmatko/firepack)
[![Code Coverage Status](https://img.shields.io/codecov/c/github/bulicmatko/firepack.svg?style=flat-square)](https://codecov.io/github/bulicmatko/firepack)
[![NPM Status](https://img.shields.io/npm/v/firepack.svg?style=flat-square)](https://www.npmjs.com/package/firepack)
[![NPM Status](https://img.shields.io/npm/dm/firepack.svg?style=flat-square)](http://npm-stat.com/charts.html?package=firepack&from=2016-08-01)
[![NPM Status](https://img.shields.io/npm/dt/firepack.svg?style=flat-square)](https://www.npmjs.org/package/firepack)
[![NPM Status](https://img.shields.io/npm/l/firepack.svg?style=flat-square)](https://github.com/bulicmatko/firepack/blob/master/LICENSE)

![](https://github.com/bulicmatko/firepack/blob/master/docs/assets/firepack.png)


### DISCLAIMER

**Firepack** is in its **early phase of development** and can be
a **subject of breaking changes** in near future.


## What is Firepack

Firepack is simple authentication wrapper for [Firebase](https://firebase.google.com/) applications
built with [React](https://facebook.github.io/react/), [React router](https://github.com/reactjs/react-router) and [Redux](http://redux.js.org/).  
It provides customizable *Sign up*, *Sign in*, *Reset password* forms and *social media authentication*.  
Authentication providers can be easily managed by passing config object via *firebaseAuthProviders* to Firepack wrapper.


## How to use Firepack


#### router.js

    import { registerRoutes } from 'firepack';
    import RootContainer from '../containers/RootContainer';
    import WelcomePage from '../components/pages/WelcomePage';

    const indexPath = '/welcome';

    export default registerRoutes([
        {
            path: '/',
            component: RootContainer,
            indexRoute: {
                component: WelcomePage,
            },
            childRoutes: [
                {
                    path: '/welcome',
                    component: WelcomePage,
                },
            ],
        },
    ], indexPath);


#### reducer.js

    import someReducer from './someReducer';

    export default combineReducers({
        someReducer,
    });


#### index.js

    import React from 'react';
    import { render } from 'react-dom';
    import Firepack from 'firepack';

    import routes from './routes';
    import reducer from './reducer';

    import firebaseConfig from './firebase/config';
    import firebaseAuthProviders from './firebase/authProviders';

    import './styles/global'; // eslint-disable-line

    render(
        <Firepack
            appTitle="Firepack App"
            appDescription="Kickstart your Firepack application"
            routes={routes}
            reducer={reducer}
            firebaseConfig={firebaseConfig}
            firebaseAuthProviders={firebaseAuthProviders}
        />,
        document.getElementById('app-root')
    );


## registerRoutes(routesArray, indexPath)


## createReducer(handler[, initState = {}])


    export default createReducer({
        'CUSTOOM_ACTION_TYPE': (state, payload) => (
            // do your magic
        ),
    }, initState);


For now, please take a look at [Firepack App](https://github.com/bulicmatko/firepack-app) (official Firepack starter).  
**More documentation on how to use Firepack from scratch and with existing application will be available soon.**


## Application Layout with Firepack

![](https://github.com/bulicmatko/firepack/blob/master/docs/assets/diagram.png)


## How to use Authenticated User Data in my application

Since Firepack provides a simple authentication wrapper around your application it should also provide a
simple way to access authenticated user data - and it does! Simply import *selectors* object and use it as described bellow.


    // import selectors object from Firepack
    import { selectors } from 'firepack';

    // To get full user data (with firepack auth flags)
    //  {
    //      isAuthenticating: false,
    //      isAuthenticated: true,
    //      data: {
    //          email: 'john.doe@email.com',
    //          ...
    //      },
    //  }
    const user = selectors.user.getUser();

    // To get user data object only
    //  {
    //      email: 'john.doe@email.com'
    //      firstName: 'John',
    //      lastName: 'Doe',
    //      ...
    //  }
    const userData = selectors.user.getUserData()

    // You can also get app
    selectors.app.getApp()



## Auth actions

    import { actions } from 'firepack';


## Helper functions

Firepack comes with handful of helper functions.


#### registerRoutes
#### createReducer
#### createActionTypes


## Demo

To see it in action with [Firepack App](https://github.com/bulicmatko/firepack-app),
please check the [demo](https://firepack-app.firebaseapp.com/).


## Contributing

If you want to contribute or share your ideas, please feel free to [contact me](mailto:bulicmatko@gmail.com).


## License

Copyright (c) 2016 [Matko Bulic](mailto:bulicmatko@gmail.com)  
Licensed under the [MIT License](https://github.com/bulicmatko/firepack/blob/master/LICENSE)
