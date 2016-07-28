/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Firepack - Index

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/firepack.prod'); // eslint-disable-line
} else {
  module.exports = require('./lib/firepack.dev'); // eslint-disable-line
}
