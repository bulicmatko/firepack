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
All authentication providers can be easily managed by passing config object (*firebaseAuthProviders*) to Firepack wrapper.


## How to use Firepack


#### router.js

First, lets register routes and main components (pages) for your application:

```js
    // Import 'registerRoutes' Firepack helper
    import { registerRoutes } from 'firepack';

    // Import your container(s) and/or page(s)
    import RootContainer from '../containers/RootContainer';
    import WelcomePage from '../components/pages/WelcomePage';

    // Index route of your application (usually for Dashboard or Welcome Page)
    const indexPath = '/welcome';

    // Register routes similar as you would in React router
    // Actially it is the same as in React router
    // Array passed to registerRoutes will be connected with Firepack routes configuration
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
```


#### reducer.js

Reducer is responsible for updating your application state. Only main reducer should be passed to Firepack.

```js
    // Import combineReducers
    import { combineReducers } from 'redux';

    // Import your app reducer(s)
    import someReducer from './someReducer';
    import someOtherReducer from './someOtherReducer';

    // Use combineReducers to combine multiple reducers
    // You should only pass one reducer to Firepack
    export default combineReducers({
        someReducer,
        someOtherReducer,
        // add more reducers here
    });
```


#### index.js

We now just have to wrap it all together and render it to DOM:

```js
    import React from 'react';
    import { render } from 'react-dom';
    import Firepack from 'firepack';

    //  Your routes and reducer
    import routes from './routes';
    import reducer from './reducer';

    render(
        <Firepack
            appTitle="My Super App"
            appDescription="Super awesome app :)"
            routes={routes}
            reducer={reducer}
            firebaseConfig={
                // You will get this data within your Firebase Console
                apiKey: 'YOUR-FIREBASE-APP-KEY',
                authDomain: 'YOUR-FIREBASE-APP-AUTH-DOMAIN',
                databaseURL: 'YOUR-FIREBASE-APP-DATABASE-URL',
                storageBucket: 'YOUR-FIREBASE-APP-STORAGE-BUCKET',
            }
            firebaseAuthProviders={
                EmailAndPassword: true,
                Facebook: true,
                Twitter: true,
                Google: true,
                Github: true,
            }
        />,
        document.getElementById('root')
    );
```


## Helper functions

Beside `registerRoutes` helper that we already covered in example above, Firepack comes with
two more helper functions (that are optional to use): `createReducer` and `createActionTypes`.


#### createReducer(handler[, initState = {}]) (optional)

`createReducer` accepts handler as a first argument and initial state (optional) as second one.
*Handler* should be an `key:function` object where `key` should match `action.type` name. Every time an action is dispatched
and `action.type` name matches the handler `key`, `function` assigned to that `key` will be called.

```js
    import { createReducer } from 'firepack';

    export default createReducer({
        'CUSTOM_ACTION_TYPE_1': (state, payload) => (
            // do your magic
        ),
        'CUSTOOM_ACTION_TYPE_2': (state, payload) => (
            // do your magic
        ),
    }, initState);
```


#### createActionTypes(actionTypesArray, prefix) (optional)

This helper accepts array of unique `action.type` names as first argument and a prefix as second.
You don't have to use this helper to create your action types, but it will probably be more convenient for you if you do.

```js
    import { createActionTypes } from 'firepack';

    export const MY_APP = createActionTypes([
        'LOAD_SOME_DATA_START',
        'LOAD_SOME_DATA_SUCCESS',
        'LOAD_SOME_DATA_FAIL',
        // add more action types here
    ], '@@my-app');
```


## How to use Authenticated User Data in my application

Since Firepack provides a simple authentication wrapper around your application it should also provide a
simple way to access authenticated user data - and it does! Simply import `selectors` object and use it as showed bellow:

```js
    // Import selectors object
    import { selectors } from 'firepack';

    // Get user object (with firepack auth flags and user data)
    //  {
    //      isAuthenticating: false,
    //      isAuthenticated: true,
    //      data: {
    //          email: 'john.doe@email.com',
    //          ...
    //      },
    //  }
    const user = selectors.user.getUser();

    // Get user data object
    //  {
    //      email: 'john.doe@email.com'
    //      firstName: 'John',
    //      lastName: 'Doe',
    //      ...
    //  }
    const userData = selectors.user.getUserData()
```


## How to use Authentication Actions in my application

If you need to *sign out* your user or use other Firepack build in action, use `actions` object from Firepack:

```js
    import { actions } from 'firepack';
```


To use it right, you should *dispatch* it as you would any action:

```
    // ...

    dispatch(actions.auth.signOut());

    // ...
```


## Need more docs?

For now, please take a look at [Firepack App](https://github.com/bulicmatko/firepack-app) (official Firepack starter)
or [contact me](mailto:bulicmatko@gmail.com).
**More documentation on how to use Firepack from scratch and with existing application will be available soon.**


## Application Layout with Firepack

![](https://github.com/bulicmatko/firepack/blob/master/docs/assets/diagram.png)

This image should give you a visual interpretation on how Firepack wraps your application.


## Demo

To see it in action with [Firepack App](https://github.com/bulicmatko/firepack-app),
please check the [demo](https://firepack-app.firebaseapp.com/).


## Contributing

If you want to contribute or share your ideas, please feel free to [contact me](mailto:bulicmatko@gmail.com).


## License

Copyright (c) 2016 [Matko Bulic](mailto:bulicmatko@gmail.com)  
Licensed under the [MIT License](https://github.com/bulicmatko/firepack/blob/master/LICENSE)
