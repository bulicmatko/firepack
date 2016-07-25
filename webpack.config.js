/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Webpack Configuration

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const path = require('path');
const webpack = require('webpack');

/**
 *  Webpack Configuration
 */
module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'Firepack',
    libraryTarget: 'umd',
  },
  externals: {
    firebase: 'firebase',
    immutable: 'immutable',
    lodash: 'lodash',
    react: 'react',
    'react-css-modules': 'react',
    'react-dom': 'react',
    'react-redux': 'react',
    'react-router': 'react',
    'react-router-redux': 'react',
    redux: 'redux',
    'redux-thunk': 'redux-thunk',
    reselect: 'reselect',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
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
      }, {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'resolve-url',
          'sass?outputStyle=expanded&sourceMap',
        ],
        include: [
          path.resolve(__dirname, './src'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
};
