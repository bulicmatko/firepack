/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/firepack.prod'); // eslint-disable-line
} else {
  module.exports = require('./dist/firepack.dev'); // eslint-disable-line
}
