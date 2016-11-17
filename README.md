# Firepack

[![Join the chat at https://gitter.im/bulicmatko/firepack](https://badges.gitter.im/bulicmatko/firepack.svg)](https://gitter.im/bulicmatko/firepack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Authentication wrapper for [Firebase](https://firebase.google.com/) Applications built with [React](https://facebook.github.io/react/),
[React router](https://github.com/reactjs/react-router) and [Redux](http://redux.js.org/)

[![Join the chat at https://gitter.im/bulicmatko/firepack](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/bulicmatko/firepack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/bulicmatko/firepack.svg?style=flat-square)](https://travis-ci.org/bulicmatko/firepack)
[![Code Coverage Status](https://img.shields.io/codecov/c/github/bulicmatko/firepack.svg?style=flat-square)](https://codecov.io/github/bulicmatko/firepack)
[![NPM Status](https://img.shields.io/npm/v/firepack.svg?style=flat-square)](https://www.npmjs.com/package/firepack)
[![NPM Status](https://img.shields.io/npm/dm/firepack.svg?style=flat-square)](http://npm-stat.com/charts.html?package=firepack&from=2016-08-01)
[![NPM Status](https://img.shields.io/npm/dt/firepack.svg?style=flat-square)](https://www.npmjs.org/package/firepack)
[![NPM Status](https://img.shields.io/npm/l/firepack.svg?style=flat-square)](https://github.com/bulicmatko/firepack/blob/master/LICENSE)


### DISCLAIMER

**Firepack** is in its **early phase of development** and can be
a **subject of breaking changes** in near future.


## What is Firepack

Firepack is simple Authentication wrapper for [Firebase](https://firebase.google.com/) Applications
built with [React](https://facebook.github.io/react/), [React router](https://github.com/reactjs/react-router) and [Redux](http://redux.js.org/).  
It provides customizable *Sign up*, *Sign in*, *Reset password* forms and *social media authentication*.  
All authentication providers can be easily managed by passing config object (*firebaseAuthProviders*) to Firepack.


## Application Layout with Firepack

![](https://github.com/bulicmatko/firepack/blob/master/docs/assets/diagram.png)

This image should give you a visual interpretation on how Firepack wraps and renders your application.
`WorkspaceContainer` and your Application `RootContainer` are accessible only if user is authenticated.


## How can I use Firepack

Some simple configuration is needed for Firepack to run. We will break to  `routes`, `reducer` and `index` files.


#### router.js

First, lets register your application `routes` and `main components` (pages):

```js
    // Import 'registerRoutes' helper
    import { registerRoutes } from 'firepack';

    // Import your container(s) and/or page(s)
    import RootContainer from '../containers/RootContainer';
    import WelcomePage from '../components/pages/WelcomePage';

    // Your application index route (such as '/dashboard' or '/welcome')
    const indexPath = '/welcome';

    // Register routes as you would for React router
    // Actually, it is the same as in React router
    // Array passed to 'registerRoutes' will be connected with Firepack React router configuration
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
                // add more child routes here
            ],
        },
    ], indexPath);
```

For more documentation on React router follow this [link](https://github.com/reactjs/react-router/tree/master/docs).


#### reducer.js

After that, you should *combine your application reducers* to one *root* reducer. Reducers are responsible for updating your application state
and only one *(root)* reducer should be passed to Firepack.

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

For more docs on Redux and reducers follow this [link](http://redux.js.org/docs/basics/Reducers.html).


#### index.js

Now, you just have to wrap it all togethe. Pass `routes` and `reducer` to Firepack and render it to DOM:

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
                // You can also change order of social providers
                // to render the in order that suits you more
                Facebook: true,
                Twitter: true,
                Google: true,
                Github: true,
            }
        />,
        document.getElementById('root')
    );
```


## How can I access Authenticated User Data

Since Firepack provides a simple authentication wrapper around your application it should also provide a
simple way for you to access authenticated user data - *and it does*! Simply import `selectors` object and use it as in example bellow:

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


## How can I use Firepack Actions

If you need to *sign out* your user or use other action baked to Firepack, use `actions`:

```js
    import { actions } from 'firepack';
```


You should *dispatch* it as you would any other action:

```js
    // ...

    dispatch(actions.auth.signOut());

    // ...
```


## Firepack helper functions

Beside `registerRoutes` helper that we already covered in example above, Firepack comes with
two more helper functions (that are optional to use): `createReducer` and `createActionTypes`.


#### createReducer(handler[, initState = {}]) *(optional)*

`createReducer` accepts handler as a first argument and initial state *(optional)* as second one.
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


#### createActionTypes(actionTypesArray, prefix) *(optional)*

This helper accepts array of unique `action.type` names as first argument and `prefix` as second one.
You don't have to use this helper to create your action types, but it will probably be more convenient for your application if you do.

```js
    import { createActionTypes } from 'firepack';

    export const MY_APP = createActionTypes([
        'LOAD_SOME_DATA_START',
        'LOAD_SOME_DATA_SUCCESS',
        'LOAD_SOME_DATA_FAIL',
        // add more action types here
    ], '@@my-app');
```


## Need more docs?

For now, please take a look at [Firepack App](https://github.com/bulicmatko/firepack-app) (official Firepack starter)
or feel free [contact me](mailto:bulicmatko@gmail.com). 🙃  
**More documentation on how to use Firepack from scratch and with existing application will be available soon.**


## Demo

To see it in action with [Firepack App](https://github.com/bulicmatko/firepack-app),
please check the [demo](https://firepack-app.firebaseapp.com/).

![](https://github.com/bulicmatko/firepack/blob/master/docs/assets/firepack.png)


## Contributing

If you want to contribute or share your ideas, please feel free to [contact me](mailto:bulicmatko@gmail.com).


## License

Copyright (c) 2016 [Matko Bulic](mailto:bulicmatko@gmail.com)  
Licensed under the [MIT License](https://github.com/bulicmatko/firepack/blob/master/LICENSE)
