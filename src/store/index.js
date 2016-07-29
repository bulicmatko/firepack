/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Store - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./createStore.prod'); // eslint-disable-line
} else {
  module.exports = require('./createStore.dev'); // eslint-disable-line
}
