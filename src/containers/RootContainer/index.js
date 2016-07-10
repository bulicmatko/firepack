/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Root Container - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (__DEVELOPMENT__) { // eslint-disable-line
  module.exports = require('./RootContainer.dev'); // eslint-disable-line
} else {
  module.exports = require('./RootContainer.prod'); // eslint-disable-line
}
