/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./RootContainer.dev'); // eslint-disable-line
} else {
  module.exports = require('./RootContainer.prod'); // eslint-disable-line
}
