/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Store - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (__DEVELOPMENT__) { // eslint-disable-line
  module.exports = require('./createStore.dev').default(); // eslint-disable-line
} else {
  module.exports = require('./createStore.prod').default(); // eslint-disable-line
}
