/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Store - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (__DEVELOPMENT__) { // eslint-disable-line
  module.exports = require('./createStore.dev'); // eslint-disable-line
} else {
  module.exports = require('./createStore.prod'); // eslint-disable-line
}
