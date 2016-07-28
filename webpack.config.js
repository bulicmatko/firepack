/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Webpack Configuration

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

/**
 *  Webpack Configuration
 */
module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: './dist',
    library: 'Firepack',
    filename: production ? 'firepack.prod.js' : 'firepack.dev.js',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    firebase: 'firebase',
    immutable: 'immutable',
    lodash: 'lodash',
    'react-redux': 'react-redux',
    'react-router': 'react-router',
    'react-router-redux': 'react-router-redux',
    redux: 'redux',
    'redux-thunk': 'redux-thunk',
    reselect: 'reselect',
  },
  plugins: production ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
  ] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel',
        ],
        include: [
          path.resolve(__dirname, './src'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
